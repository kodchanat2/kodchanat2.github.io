import { Client } from '@notionhq/client';

export default defineCachedEventHandler(async (event)=> {

  // console.log(process.env.NOTION_API, status, total, id);
  const notion = new Client({ auth: process.env.NOTION_API });
  const res = await notion.databases.query({ database_id: process.env.NOTION_DB })
  return groupingData(normolizeData(res));
  // console.log(res);
  // return res;
},{ maxAge: 60 * 1 }) // 1 minutes


function normolizeData(data) {
  const results = data.results;
  const normolizedData = results.map((result) => {
    const properties = result.properties;
    const title = properties.title.rich_text[0]?.plain_text;
    const description = properties.description.rich_text[0]?.plain_text;
    const url = properties.URL.url || undefined;
    const tags = properties.Tags.multi_select.length ? properties.Tags.multi_select.map((tag) => tag.name) : undefined;
    const content = properties.content.rich_text[0]?.plain_text;
    const img = properties.img.files[0]?.file.url;
    const key = properties.key.title[0]?.plain_text;
    const date = properties.Date.date?.start || undefined;
    const id = result.id;
    const show = properties.show.checkbox || undefined;
    const parent = properties['Parent item'].relation[0]?.id;
    return {
      title,
      description,
      url,
      tags,
      date,
      content,
      img,
      key,
      id,
      parent,
      show,
    }
  }).filter((item) => item.key && item.show);
  return normolizedData;
}
// console.log(normolizeData(data));

function groupingData(normolizedData) {
  const parentData = normolizedData.reduce((acc, curr) => {
    if (!curr.parent) {
      acc[curr.id] = curr;
    }
    return acc;
  }, {});
  const removeEmpty = (obj) => {
    let newObj = {};
    Object.keys(obj).forEach((key) => {
      if (obj[key] === Object(obj[key])) newObj[key] = removeEmpty(obj[key]);
      else if (obj[key] !== undefined) newObj[key] = obj[key];
    });
    return newObj;
  };
  function formatDate(date, th = false) {
    if (!date) return undefined;
    const dateObj = new Date(date);
    const month = dateObj.toLocaleString(th?'th-th':'en-us', { month: 'short' });
    const year = dateObj.getFullYear();
    return `${month} ${year}`;
  }

  const groupedData = normolizedData.reduce((acc, curr) => {
    const id = curr.parent;
    if (!id || !parentData[id]) return acc;
    const data = {...parentData[id], ...removeEmpty(curr), key: parentData[id].key};
    if (curr.key === 'th') acc.th[id] = data;
    else acc.en[id] = data;
    return acc;
  }, {th:{...parentData}, en:{...parentData}});
  groupedData.th = Object.values(groupedData.th).map((item) => ({...item, date: formatDate(item.date, true)}));
  groupedData.en = Object.values(groupedData.en).map((item) => ({...item, date: formatDate(item.date)}));
  return groupedData;
}

// console.log(groupingData(normolizeData(data)));