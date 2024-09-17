<template>
  <div class="content">
    <!-- content 1 -->
    <div class="flex flex-col gap-4 p-4 border-r-grey h-full max-h-full-vh">
      <input type="text" class="uk-input" placeholder="Search..." />
      <select class="uk-select">
        <option value="">Inbox</option>
        <option value="">Drafts</option>
        <option value="">Sent</option>
        <option value="">Junk</option>
        <option value="">Trash</option>
      </select>
      <div class="flex flex-col gap-4 overflow-scroll">
        <div class="uk-card uk-card-body uk-card-default" v-for="i in 20">
          <h3 class="uk-card-title">Default</h3>
          <p class="uk-margin">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
    <!-- content 2 -->
    <div class="p-4 flex flex-col">
      <!--  -->
      <div class="flex justify-between items-center gap-4 border-b-grey py-2">
        <div>
          <p class="flex items-center gap-2">
            <AvatarCompo>
              <template v-slot:content>
                <User />
              </template>
            </AvatarCompo>
            <span>User</span>
          </p>
        </div>
        <span class="text-muted-foreground"> Oct 22, 2023, 9:00:00 AM </span>
      </div>
      <!--  -->
      <div class="mails-bottom pt-4 flex flex-col h-full">
        <p class=" py-2 h-full">
          Subject: Important Update Regarding Your Account<br /><br />
          From: support@fakemagnet.com<br />
          To: user@example.com<br /><br />
          Dear User,<br /><br />
          We hope this message finds you well. We are reaching out to inform you
          of an important update regarding your account with us.<br />
          To ensure the security of your information, we have implemented new
          verification protocols. Please take a moment to log in to your account
          and verify your details using the link below:<br /><br />

          <a href="#" class="link">Verify Your Account Now</a><br /><br />

          Failure to complete this verification process within 48 hours may
          result in temporary suspension of your account.<br />
          Thank you for your prompt attention to this matter. If you have any
          questions, please do not hesitate to contact our support team.<br /><br />
          Best regards,<br />
          The Fake Magnet Team
        </p>
        <textarea
          rows="10"
          name=""
          id=""
          class="uk-textarea my-4"
          placeholder="Reply User"
        ></textarea>
        <button class="uk-button uk-button-primary flex ml-auto">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
import AvatarCompo from "./reusable/AvatarCompo.vue";
import { User, Inbox } from "lucide-vue-next";
export default {
  name: "MailsCompo",
  components: {
    AvatarCompo,
    User,
    Inbox,
  },
};
</script>

<style scoped>
.content {
  display: grid;
  grid-template-columns: 0.3fr 1fr;
}

</style>
