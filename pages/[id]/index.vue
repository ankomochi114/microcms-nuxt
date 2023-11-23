<template>
  <template v-if="blogs">
    <v-container>
      <v-row justify="center">
        <v-col cols="8">
          <v-img :src="blogs.eyecatch?.url"></v-img>
          <h1 class="text-h4 mt-6 mb-3 font-weight-bold">{{ blogs.title }}</h1>
          <v-chip
            variant="outlined"
            class="ma-2"
            label
            text-color="white"
            color="primary"
          >
            <v-icon start icon="mdi-format-align-left"></v-icon>
            {{ blogs.category?.name }}
          </v-chip>
          <v-chip
            v-for="tag in blogs.tags"
            prepend-icon="mdi-tag"
            class="ma-2"
            color="primary"
          >
            {{ tag.name }}
          </v-chip>
          <p class="text-body text-end">
            <v-icon start icon="mdi-clock-time-four-outline"></v-icon>
            <span>{{ dateFormat(blogs.publishedAt ?? blogs.createdAt) }}</span>
          </p>
          <div class="blogContent mt-8" v-html="blogs.content"></div>
        </v-col>
      </v-row>
    </v-container>
  </template>
</template>

<script setup lang="ts">
import type { Blog } from "~~/types/blog";

const { params } = useRoute();

const { data: blogs } = await useMicroCMSGetListDetail<Blog>({
  endpoint: "blogs",
  contentId: Array.isArray(params.id) ? params.id[0] : params.id,
});
</script>

<style lang="scss">
.blogContent {
  img {
    width: 100%;
    height: auto;
  }

  h2 {
    font-size: 1.5rem;
    margin: 4rem 0 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #e0e0e0;

    &:first-child {
      margin-top: 0;
    }
  }

  p {
    margin: 1.5rem 0 0.5rem;
  }

  & > ol,
  & > ul {
    list-style-position: inside;
  }
}
</style>
