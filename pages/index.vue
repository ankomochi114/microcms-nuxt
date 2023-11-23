<template>
  <v-container>
    <v-row>
      <v-col v-for="blog in blogs?.contents" cols="4">
        <v-card class="mx-auto" link :href="blog.id">
          <v-img cover :src="blog.eyecatch?.url" alt="" />
          <v-card-item>
            <p class="text-h6 mb-2 font-weight-bold">{{ blog.title }}</p>
            <v-chip
              variant="outlined"
              class="ma-1"
              label
              text-color="white"
              color="primary"
              size="small"
            >
              <v-icon start icon="mdi-format-align-left"></v-icon>
              {{ blog.category?.name }}
            </v-chip>
            <v-chip
              size="small"
              v-for="tag in blog.tags"
              prepend-icon="mdi-tag"
              class="ma-1"
              color="primary"
            >
              {{ tag.name }}
            </v-chip>
            <div class="d-flex flex-row-reverse">
              <v-chip
                prepend-icon="mdi-clock-time-four-outline"
                class="mt-1"
                variant="text"
              >
                {{ dateFormat(blog.publishedAt ?? blog.createdAt) }}
              </v-chip>
            </div>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import type { Blog } from "~~/types/blog";

const { data: blogs } = await useMicroCMSGetList<Blog>({
  endpoint: "blogs",
});
</script>
