<script lang="ts" setup>

const {slug} = useRoute().params
// 从 slug 数中获取最后一个元素（id）
const id = slug[slug.length -1]
const res = await useAsyncGql('article', {id: id})
const article = res.data.value?.article?.data
console.log('article', res)
</script>

<template>
  <div>
    This is slug view based /

    params： {{ $route.params }}
    slug： {{ $route.params.slug }}

    <!-- article: {{ res }} -->
    <!-- article2: {{  article  }} -->

    <!-- data: {{ data.data.value }} -->

    <template v-if="article?.attributes">
      <h1>{{ article.attributes.title }}</h1>
      <div>{{ article.attributes.date }}</div>
      <div>
        {{ article.attributes.body }}
      </div>
    </template>
  </div>
</template>