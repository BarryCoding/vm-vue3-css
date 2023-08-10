<template>
  <v-app>
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
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showPassword = ref(false)

function toggleShowPassword() {
  showPassword.value = !showPassword.value
}
</script>

<style scoped></style>
