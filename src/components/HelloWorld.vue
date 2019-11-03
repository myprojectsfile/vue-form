<template>
  <div>
    <form>
      <validation-provider name="email" rules="required|email">
        <template #default="{ errors }">
          <input v-model="email" />
          <p>{{ errors[0] }}</p>
        </template>
      </validation-provider>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null
    };
  }
};
</script>

<style lang="scss" scoped></style>
