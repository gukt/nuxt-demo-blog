<script lang="ts" setup>
// const { data } = await useAsyncGql({
//   operation: 'articles',
//   variables: { limit: 5 }
// });

const { data } = await useAsyncGql('articles')
// console.log('articles', data)
// console.log('process.env', process.env)
// const env = process.env
</script>

<template>
  <div>
    <!-- process.env: {{ env }} -->
    This is the index page.
    <ul>
      <li v-for="(article, i) in data?.articles?.data">
        <div>
        <div>
          <h2>
            <nuxt-link :to="`/articles/${article.id}`">
              {{ article.attributes?.title }}
            </nuxt-link>
          </h2>
          {{ article.attributes?.description }}
        </div>
        <div>{{ article.attributes?.date }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>