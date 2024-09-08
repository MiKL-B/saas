<template>
  <section class="py-16 px-4">
    <h1 class="text-6xl mb-2">Connect YouTubers and sponsors, effortlessly</h1>
    <p class="mb-4">
      Discover sponsors for your videos or find the perfect youtube channels for
      your brand
    </p>
    <Button>Begin now</Button>
  </section>

  <section class="py-16 px-4">
    <h2 class="text-4xl mb-2">Potential Brand Experiences</h2>
    <p class="text-sm mb-4">
      Discover what you could say about Saas after a few months of using it
    </p>
    <div class="flex justify-center flex-wrap gap-4">
      <Card v-for="i in 3">
        <CardHeader>
          <CardTitle>Maybe you</CardTitle>
          <CardDescription
            >Marketing Director at a Tech Company</CardDescription
          >
        </CardHeader>
        <CardContent>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
            voluptates assumenda architecto blanditiis autem aliquid asperiores,
            accusamus explicabo animi vitae magnam quis nesciunt magni commodi
            ipsam, cumque placeat doloribus delectus. Vero reprehenderit alias
            optio necessitatibus, libero exercitationem repellendus laboriosam.
            Similique eius ratione facere itaque ea quis ipsa tempora sunt nisi?
          </p>
        </CardContent>
      </Card>
    </div>
  </section>
  <section class="py-16 px-4">
    <h2 class="text-4xl mb-2">
      One simple platform to kow everything about influence on Youtube
    </h2>
    <p class="mb-4">
      Youtubers who want to maximize their revenue by getting sponsored Brands
      looking for Youtubers
    </p>
    <div class="flex justify-center flex-wrap gap-4">
      <Card v-for="i in 2">
        <CardHeader>
          <CardTitle>2000</CardTitle>
          <CardDescription>Sponsors</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
            voluptates assumenda architecto blanditiis autem aliquid asperiores,
            accusamus explicabo animi vitae magnam quis nesciunt magni commodi
            ipsam, cumque placeat doloribus delectus. Vero reprehenderit alias
            optio necessitatibus, libero exercitationem repellendus laboriosam.
            Similique eius ratione facere itaque ea quis ipsa tempora sunt nisi?
          </p>
        </CardContent>
      </Card>
    </div>
  </section>
  <section class="py-16 px-4">
    <h2 class="text-4xl mb-4">How to start discovering ?</h2>
    <div class="flex justify-center flex-wrap gap-4">
      <Card v-for="i in 4">
        <CardHeader>
          <CardTitle>{{ i }} Step</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
            voluptates assumenda architecto blanditiis autem aliquid asperiores,
            accusamus explicabo animi vitae magnam quis nesciunt magni commodi
          </p>
        </CardContent>
      </Card>
    </div>
  </section>
  <section class="py-16 px-4">
    <h2 class="text-4xl mb-4">To get access to the platform</h2>
    <div class="flex justify-center flex-wrap gap-4">
      <Card v-for="i in 2">
        <CardHeader>
          <CardTitle>Creator</CardTitle>
          <CardDescription
            >For YouTubers looking for more sponsors in their
            niche</CardDescription
          >
        </CardHeader>
        <CardContent>
          <p class="mb-4">
            <span class="font-semibold text-4xl">99€</span>/month
          </p>
          <ul>
            <li><Icon name="uil:check" style="color: black" /> List of sponsors</li>
            <li><Icon name="uil:check" style="color: black" /> List of sponsors</li>
            <li><Icon name="uil:check" style="color: black" /> List of sponsors</li>
            <li><Icon name="uil:check" style="color: black" /> List of sponsors</li>
            <li><Icon name="uil:check" style="color: black" /> List of sponsors</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button class="w-full">Buy now</Button>
        </CardFooter>
      </Card>
    </div>
  </section>
  <section class="py-16 px-4">
    <h2 class="text-4xl mb-2">Creator of Saas</h2>
    <p class="mb-4">Mika, Coder</p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed numquam atque
      ipsam porro reprehenderit labore repellendus sapiente reiciendis officiis
      voluptates. Illo minus suscipit, nulla cupiditate velit id, maxime
      repellat cum reiciendis quod recusandae dolor eveniet dignissimos magnam
      cumque? Corrupti vero consequuntur quisquam facere non similique quasi
      veniam iure eaque impedit.
    </p>
  </section>
  <section class="py-16 px-4">
    <h2 class="text-4xl mb-4">Common Questions</h2>
    <div class="flex flex-col flex-wrap gap-4">
      <Card v-for="i in 4">
        <CardHeader>
          <CardTitle class="flex justify-between">{{ i }} Questions 1 <Icon name="streamline:interface-arrows-button-right-arrow-right-keyboard"/></CardTitle>
        </CardHeader>
      </Card>
    </div>
  </section>
  <section class="py-16 px-4">
    <h2 class="text-4xl mb-4">
      Ready to find the perfect sponsors or influencers on Youtube ?
    </h2>
    <Button class="flex w-full">Join Saas</Button>
  </section>
</template>

<style>
</style>
