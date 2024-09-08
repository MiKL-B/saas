<template>
  <div class="flex flex-col w-96 gap-2 m-auto py-24">
    <h1 class="text-4xl font-semibold text-center">Create an account</h1>
    <p class="font-thin text-center mb-4">
      Enter your email below to create your account
    </p>
    <Label for="email" class="font-semibold">Email</Label>
    <Input id="email" type="email" placeholder="name@example.com" required />
    <div class="flex items-center">
      <Label for="password" class="font-semibold">Password</Label>
      <a href="#" class="ml-auto inline-block text-sm underline">
        Forgot your password?
      </a>
    </div>
    <Input id="password" type="password" required />

    <Separator orientation="vertical" />

    <Button>Sign up</Button>
    <p class="font-thin text-center mb-4">Already have an account ? <a href="#" class="underline">Login</a></p>
    <p class="font-thin text-center text-sm">
      By clicking continue, you agree to our <a href="#" class="underline">Terms of Service</a> and <a href="#" class="underline">Privacy
        Policy</a>.
    </p>
  </div>
</template>
<script></script>
