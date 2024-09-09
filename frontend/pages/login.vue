<template>
  <section class="py-16 px-4 flex flex-col xl:max-w-lg xl:mx-auto">
    <Card>
      <CardHeader>
        <CardTitle>{{
          isLoginForm ? "Log in to your account" : "Create an account"
        }}</CardTitle>
        <CardDescription>to continue to saas</CardDescription>
      </CardHeader>
      <CardContent>
        <!-- Name -->
        <div v-if="!isLoginForm">
          <Label for="name" class="font-semibold mb-2">Name</Label>
          <Input id="name" type="text" class="mb-4" required />
        </div>
        <!-- Email -->
        <Label for="email" class="font-semibold mb-2">Email</Label>
        <Input
          id="email"
          type="email"
          class="mb-4"
          placeholder="name@example.com"
          required
        />
        <!-- Password -->
        <Label for="password" class="font-semibold mb-2">Password</Label>
        <Input id="password" type="password" class="mb-4" required />
        <!-- Remember me -->
        <div v-if="isLoginForm" class="items-top flex gap-x-2">
          <Checkbox id="terms1" />
          <div class="grid gap-1.5 leading-none">
            <label
              for="terms1"
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remember me
            </label>
            <p class="text-sm text-muted-foreground">
              Recommended on trusted devices.
              <a href="#" class="underline link">Why?</a>
            </p>
          </div>
        </div>
        <!-- Confirm password -->
        <div v-if="!isLoginForm">
          <Label for="confirm" class="font-semibold mb-2"
            >Confirm your password</Label
          >
          <Input id="confirm" type="password" class="mb-4" required />
        </div>
      </CardContent>
      <CardFooter class="flex flex-col">
        <Button class="mb-4 w-full">{{
          isLoginForm ? "Login" : "Sign up"
        }}</Button>
        <p class="font-thin text-center">
          {{ isLoginForm ? "" : "Already have an account ?" }}
          <span
            class="underline cursor-pointer link"
            @click="isLoginForm = !isLoginForm"
            >{{ isLoginForm ? "Create an account here !" : "Login" }}</span
          >
        </p>
        <Separator class="my-4" orientation="horizontal" />
        <!-- Agree terms -->
        <p v-if="!isLoginForm" class="font-thin text-center text-sm">
          By clicking continue, you agree to our
          <a href="#" class="underline link">Terms of Service</a> and
          <a href="#" class="underline link">Privacy Policy</a>.
        </p>
        <!-- A problem to connect (forgot password, email, name etc) -->
        <a v-if="isLoginForm" href="#" class="underline link">
          A problem to connect ?
        </a>
      </CardFooter>
    </Card>
  </section>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      isLoginForm: false,
    };
  },
};
</script>
