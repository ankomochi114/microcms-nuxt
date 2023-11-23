<template>
  <v-app>
    <v-app-bar :floating="false"
      ><v-app-bar-title>Sample</v-app-bar-title>
    </v-app-bar>
    <v-main style="padding-top: 64px">
      <slot></slot>
    </v-main>
  </v-app>
</template>
