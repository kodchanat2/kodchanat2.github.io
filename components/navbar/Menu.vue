<template>
  <div class="relative">
    <div
      class="group bg-secondary z-30 relative inline-flex items-center rounded-full cursor-pointer p-1 transition-colors focus:outline-none"
      :class="shown ? '' : ''" @click="toggleMenu">
      <Icon :name="shown ? 'mdi:close-thick' : 'ic:baseline-settings'" aria-hidden="true"
        class="w-8 h-8 transition-transform duration-500 delay-100"
        :class="shown && !closing ? 'scale-110 rotate-90' : 'scale-100 rotate-0'" />
    </div>

    <div v-if="shown" class="fixed top-0 left-0 w-screen h-screen-large bg-background/70 menu-mask"
      :class="closing ? 'reverse' : ''" @click="toggleMenu"></div>

    <div class="fixed top-0 left-0 z-20 w-screen tasla expand-menu-animate" :class="[closing && 'reverse', !shown&&'hidden']">
      <transition enter-active-class="transition duration-500 delay-200 ease-out"
        enter-from-class="-translate-y-10 opacity-0" enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-700 leave-cubic" leave-from-class="translate-y-0 opacity-100"
        leave-to-class="-translate-y-10 opacity-0">
        <div v-if="shown&&!closing" class="overflow-hidden mt-navbar py-4">
          <div v-for="(item, index) in list" :key="item.name" class="w-full p-3 text-center text-xl font-medium">
            <NuxtLink :to="item.to" @click="toggleMenu">
              {{ $t(item.name + '_title') }}
              <Icon v-if="item.page" name="ep:right" />
            </NuxtLink>
          </div>
          <NavbarPreference class="mt-4" :menu="true" />
          <!-- <div class="w-full absolute pt-8 text-center text-xl font-light pointer-events-none">
            {{ $t('close') }}
          </div> -->
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
const shown = useState('show', () => false)
const closing = useState('closing', () => false)
const timer = null;
const toggleMenu = () => {
  if (!shown.value){
    document.body.style.overflow = 'hidden';
    return shown.value = true;
  }

  clearTimeout(timer);
  closing.value = true;
  timer = setTimeout(() => {
    document.body.style.overflow = 'auto';
    closing.value = false;
    shown.value = false;
  }, 500);
}

const list = [
  {
    name: 'home',
    to: '/',
  },
  {
    name: 'skill',
    to: '/#skill',
  },
  {
    name: 'project',
    to: '/#project',
  },
  {
    name: 'contact',
    to: '/#contact',
  },
  {
    name: 'browse',
    page: true,
    to: '#'
  }
]

</script>

<style scoped>
:root {
  --MENU_WIDTH: 0%;
}

.expand-menu-animate {
  background-image: radial-gradient(circle farthest-corner at 93% 5%, rgb(var(--secondary)) var(--MENU_WIDTH), transparent var(--MENU_WIDTH));
  animation: menu-transition 0.5s ease-out forwards;
}

.expand-menu-animate.reverse {
  animation: menu-transition-back 0.5s ease-out forwards;
}

.menu-mask {
  opacity: 0;
  animation: opacity-fade-in 0.3s 0.1s ease-out forwards;
}

.menu-mask.reverse {
  animation: opacity-fade-out 0.3s ease-out forwards;
}

.leave-cubic{
  transition-timing-function: cubic-bezier(.16,1,0,1);
}

@property --MENU_WIDTH {
  syntax: '<percentage>';
  initial-value: 0%;
  inherits: false;
}

@keyframes menu-transition {
  0% {
    --MENU_WIDTH: 0%;
  }

  100% {
    --MENU_WIDTH: 100%;
  }
}

@keyframes menu-transition-back {
  0% {
    --MENU_WIDTH: 100%;
  }

  100% {
    --MENU_WIDTH: 0%;
  }
}

@keyframes opacity-fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes opacity-fade-out {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
</style>