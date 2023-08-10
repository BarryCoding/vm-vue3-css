<template>
  <v-layout>
    <v-app-bar color="primary" dark>
      <v-app-bar-title> Vuetify Dashboard </v-app-bar-title>
      <v-spacer />
      <v-btn color="white" variant="text" class="mx-2" rounded="xl">Home</v-btn>
      <v-btn color="white" variant="text" class="mx-2" rounded="xl"
        >Login</v-btn
      >
    </v-app-bar>

    <v-main>
      <v-card width="400" class="mx-auto mt-5">
        <v-card-title>
          <h1>Login</h1>
        </v-card-title>

        <v-card-text>
          <v-form>
            <v-text-field label="Username" prepend-icon="mdi-account-circle" />
            <v-text-field
              label="Password"
              :type="showPassword ? 'text' : 'password'"
              prepend-icon="mdi-lock"
              :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append-inner="toggleShowPassword"
            />
          </v-form>
        </v-card-text>

        <v-divider />

        <v-card-actions>
          <v-btn color="success">Register</v-btn>
          <v-spacer />
          <v-btn color="info">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-main>

    <v-footer app color="primary" dark>
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          variant="text"
          class="mx-2"
          rounded="xl"
        >
          {{ link }}
        </v-btn>
        <v-col class="text-center mt-4" cols="12">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showPassword = ref(false)
const links = ref(['Home', 'Login'])

function toggleShowPassword() {
  showPassword.value = !showPassword.value
}
</script>

<style scoped></style>
