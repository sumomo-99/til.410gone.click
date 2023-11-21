<script setup>
import { data as posts } from './.vitepress/theme/posts.data.js'
</script>

# すべての記事

<ul v-for="post of posts" class="home-posts-article">
  <li>
    <a :href="post.url">{{ post.frontmatter.title }}</a>
  </li >
</ul>