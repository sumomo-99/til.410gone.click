---
theme: page
title:  til.410gone.click
next: false
prev: false
---

<script setup>
import { data as posts } from './.vitepress/theme/posts.data.js'
</script>

# 最近の投稿
<a v-for="post of posts" :href="post.url" class="!no-underline">
<article class="hover:bg-slate-100 rounded-md hover:cursor-pointer p-4 border hover:border-indigo-300">
  <p class="text-lg text-black font-bold">
    {{ post.frontmatter.title }}
  </p>
  <p class="text-gray-600">{{ post.frontmatter.description }}</p>
</article>
</a>