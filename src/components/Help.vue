<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import { PhQuestion } from '@phosphor-icons/vue';

const solutions = [
  { command: 'CTRL + Espaço', description: 'Iniciar sorteio' },
  { command: 'CTRL + Enter', description: 'Confirmar resultado' },
  { command: 'CTRL + R', description: 'Resetar sorteio' }
];
</script>

<template>
  <div class="fixed self-end bottom-10 px-4">
    <Popover
      v-slot="{ open }"
      class="relative"
    >
      <PopoverButton
        :class="open ? '' : 'text-opacity-90'"
        class="group inline-flex items-center rounded-md bg-transparent px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none"
      >
        <ph-question :size="60" />
      </PopoverButton>

      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="translate-y-1 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="translate-y-1 opacity-0"
      >
        <PopoverPanel class="absolute right-5 -top-96 z-10 mt-3 w-screen max-w-md transform px-4 sm:px-0 lg:max-w-3xl">
          <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
            <div class="bg-gray-800 p-6">
              <span class="block text-2xl text-gray-400">
                Utilize os comandos abaixo
              </span>
            </div>

            <div class="relative grid gap-8 bg-gray-800 p-7 lg:grid-cols-2">
              <div
                v-for="(item, index) in solutions"
                :key="index"
                class="-m-2 flex items-center rounded-lg p-2 transition duration-150 ease-in-out"
              >
                <span class="mx-2">
                  <p class="text-xl font-medium text-success">
                    {{ item.command }}
                  </p>

                  <p class="text-xl text-gray-300">
                    {{ item.description }}
                  </p>
                </span>
              </div>
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </div>
</template>
