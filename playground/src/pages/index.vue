<script setup lang="ts">
import { name, version } from '../../../package.json'

const showDropdown = ref(false)
const showDialog = ref(false)
const radio = ref('a')
const select = ref('')

const code = 'import a from \'a\'\nimport c from \'c\''
const markdown = 'I am **markdown** text here!'
</script>

<template>
  <div class="relative p-8 d-bg-base md:p-10">
    <div class="mx-auto w-full flex flex-col gap-4 container">
      <DTip d="hover:yellow-600 dark:hover:yellow-500">
        This library is heavily working in progress. Breaking changes may not follow
        semver. Pin the version if used.
      </DTip>

      <div class="flex items-center gap-2">
        <div class="text-4xl uppercase">
          {{ name }}
        </div>
        <sup class="text-xl">
          <code>v{{ version }}</code>
        </sup>
      </div>

      <div class="mb-5 flex gap-1">
        <DButton
          d="sm"
          to="https://github.com/danielzhang183/uno-ui-lite"
          target="_blank"
          icon="carbon-logo-github"
        >
          Github
        </DButton>
        <DDarkToggle>
          <template #default="{ isDark }">
            <DSwitch v-model="isDark.value" d="indigo">
              {{ isDark.value ? 'Dark' : 'Light' }}
            </DSwitch>
          </template>
        </DDarkToggle>
      </div>

      <DCard class="p4">
        <div class="d-header-upper">
          Button
        </div>
        <div id="buttons" class="flex flex-wrap items-center gap-3">
          <DButton d="yellow6 dark:yellow5 xs">
            XS Yellow
          </DButton>
          <DButton d="orange6 dark:orange5 sm dashed">
            S Orange Dashed
          </DButton>
          <DButton d="red6 dark:red5 solid" icon="carbon:at">
            Red Solid
          </DButton>
          <DButton disabled>
            Disabled
          </DButton>
          <DButton d="purple6 dark:purple5 xl">
            XL Purple
          </DButton>
        </div>
      </DCard>

      <DCard class="p4">
        <div class="d-header-upper">
          Checkboxes
        </div>
        <div class="flex items-center gap-3">
          <DCheckbox d="sky6 dark:sky5 sm" :model-value="true">
            Small
          </DCheckbox>
          <DCheckbox d="red6 dark:red5" :model-value="false">
            Normal
          </DCheckbox>
          <DCheckbox d="purple6 dark:purple5 xl" :model-value="true" disabled>
            XL Disabled
          </DCheckbox>
        </div>
      </DCard>

      <DCard class="p4">
        <div class="d-header-upper">
          Links
        </div>
        <form class="flex items-center gap-3">
          <DLink to="/" d="green">
            Link
          </DLink>
          <DLink href="https://github.com/danielzhang183/uno-ui-lite">
            xxx.com
          </DLink>
        </form>
      </DCard>

      <DCard class="p4">
        <div class="d-header-upper">
          Radios
        </div>
        <form class="flex flex-wrap items-center gap-3">
          <DRadio v-model="radio" d="red6 dark:red5" name="name" value="a">
            Apple
          </DRadio>
          <DRadio v-model="radio" d="yellow6 dark:yellow5" name="name" value="b">
            Banana
          </DRadio>
          <DRadio v-model="radio" d="orange6 dark:orange5" name="name" value="c">
            Orange
          </DRadio>
        </form>
      </DCard>

      <DCard class="p4">
        <div class="d-header-upper">
          Switches
        </div>
        <div class="flex flex-wrap items-center gap-3">
          <DSwitch d="lime6 dark:lime5 sm" :model-value="true">
            SM
          </DSwitch>
          <DSwitch d="red6 dark:red5" :model-value="false">
            Normal
          </DSwitch>
          <DSwitch :model-value="true" disabled>
            Disabled
          </DSwitch>
          <DSwitch d="purple6 dark:purple5 xl" :model-value="false">
            XL
          </DSwitch>
        </div>
      </DCard>

      <DCard class="p4">
        <div class="d-header-upper">
          Tips
        </div>
        <div class="flex flex-col gap-2">
          <DTip d="lime6 dark:lime5" icon="carbon:checkmark-outline">
            Success!
          </DTip>
          <DTip d="yellow6 dark:yellow5" icon="carbon:warning">
            Warning!
          </DTip>
          <DTip d="red6 dark:red5" icon="carbon:warning-alt">
            Error!
          </DTip>
        </div>
      </DCard>

      <DCard class="p4">
        <div class="d-header-upper">
          Dropdown
        </div>
        <div class="flex flex-col gap-2">
          <DDropdown v-model="showDropdown" d="lime6 dark:lime5">
            <template #trigger>
              <DButton @click="showDropdown = !showDropdown">
                Dropdown ({{ showDropdown }})
              </DButton>
            </template>
            <div class="flex flex-col gap-2 p-3">
              <div v-for="item in 4" :key="item">
                Item {{ item }}
              </div>
            </div>
          </DDropdown>

          <DSelect v-model="select" placeholder="Select something">
            <option v-for="item in 4" :key="item" :value="item">
              Item {{ item }}
            </option>
          </DSelect>
        </div>
      </DCard>

      <DCard class="p4">
        <div class="d-header-upper">
          TextInput
        </div>
        <div class="flex flex-col gap-2">
          <DTextInput
            d="lime6 dark:lime5"
            icon="carbon:checkmark-outline"
            placeholder="Hi!"
          />
          <DTextInput
            d="pink6 dark:pink5"
            icon="carbon:user"
            placeholder="Your name..."
          />
          <DTextInput
            d="lime6 dark:lime5"
            icon="carbon:password"
            type="password"
            placeholder="Your password..."
          />
        </div>
      </DCard>

      <DCard class="p4">
        <div class="d-header-upper">
          Dialog
        </div>
        <div class="flex flex-col gap-2">
          <DButton d="lime6 dark:lime5" @click="showDialog = !showDialog">
            Show Dialog
          </DButton>
          <DDialog v-model="showDialog" class="min-w-100 flex flex-col gap-4 p4">
            <h1 text-4xl>
              Hi
            </h1>
            <DTextInput d="lime6 dark:lime5" placeholder="Say something..." />
            <div>
              <DButton @click="showDialog = false">
                Close
              </DButton>
            </div>
          </DDialog>
        </div>
      </DCard>

      <DCard class="p4">
        <div class="d-header-upper">
          Collapse
        </div>
        <div class="flex flex-col gap-2">
          <DSectionBlock
            icon="i-carbon-nominal"
            text="Items Assemble"
            description="This is the description here"
          >
            <div class="flex flex-wrap gap-2">
              <DButton
                v-for="item in 4"
                :key="item"
                d="orange6 dark:orange5 sm dashed rounded-xl flex-shrink-0"
              >
                Item {{ item }}
              </DButton>
            </div>
          </DSectionBlock>
        </div>
      </DCard>

      <DCard class="p4">
        <div class="d-header-upper">
          Markdown
        </div>
        <div class="flex flex-col gap-2">
          <DCodeBlock
            :code="code"
            lang="typescript"
          />
          <DMarkdown class="mb2 mt--1 text-base op50" :markdown="markdown" />
        </div>
      </DCard>

      <DCard class="p4">
        <div class="d-header-upper">
          Loading
        </div>
        <div class="flex flex-col gap-2">
          <DLoading />
        </div>
      </DCard>
    </div>
  </div>
</template>
