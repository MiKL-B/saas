<template>
  <div v-if="1!=0">
    <SplitterCompo>
      <template v-slot:left>
        <div class="flex flex-col gap-4 p-4 lg:h-full lg:max-h-full-vh">
          <!-- <div class="flex flex-col sm:grid sm:grid-cols-2 gap-2">
            <SearchCompo />
          </div> -->

          <div class="select">
            <select>
              <option value="">Inbox</option>
              <option value="">Drafts</option>
              <option value="">Sent</option>
              <option value="">Junk</option>
              <option value="">Trash</option>
            </select>
          </div>

          <div class="flex flex-col h-full gap-4 overflow-scroll">
            <div class="card" v-for="mail in inbox">
              <div class="card-header flex-col">
                <h3 class="card-title">{{ mail.title }} {{ mail.index }}</h3>
                <p class="text-grey">
                  {{ mail.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-slot:right>
        <div class="p-4 flex flex-col h-full">
          <div class="flex justify-between items-center">
            <button class="secondary flex items-center gap-2">
              <User :size="16" class="text-grey" />
              <span>John Doe</span>
            </button>
            <span class="text-grey"> Oct 22, 2023, 9:00:00 AM </span>
          </div>
          <div class="flex flex-col h-full justify-between">
            <p class="pt-4 overflow-scroll h-36rem">
              Subject: Important Update Regarding Your Account<br /><br />
              <span
                >From:
                <span class="underline">support@fakemagnet.com</span></span
              >
              <br />
              <span>To: <span class="underline">user@example.com</span></span>
              <br /><br />
              Dear User,<br /><br />
              We hope this message finds you well. We are reaching out to inform
              you of an important update regarding your account with us.<br />
              To ensure the security of your information, we have implemented
              new verification protocols. Please take a moment to log in to your
              account and verify your details using the link below:<br /><br />

              <a href="#" class="underline">Verify Your Account Now</a
              ><br /><br />

              Failure to complete this verification process within 48 hours may
              result in temporary suspension of your account.<br />
              Thank you for your prompt attention to this matter. If you have
              any questions, please do not hesitate to contact our support
              team.<br /><br />
              Best regards,<br />
              The Fake Magnet Team
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              hic, inventore fugit quam aliquam quod tenetur velit, animi quis,
              atque quidem! Tenetur placeat, soluta a hic dolores quo aliquid
              esse impedit distinctio nesciunt odit ipsum possimus, error illum
              laudantium, quibusdam recusandae itaque earum quas labore natus.
              Deleniti ad eum fugit. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Deserunt hic, inventore fugit quam aliquam quod
              tenetur velit, animi quis, atque quidem! Tenetur placeat, soluta a
              hic dolores quo aliquid esse impedit distinctio nesciunt odit
              ipsum possimus, error illum laudantium, quibusdam recusandae
              itaque earum quas labore natus. Deleniti ad eum fugit.
            </p>
            <textarea
              rows="6"
              class="my-4 w-full h-12rem"
              placeholder="Reply User"
            ></textarea>
            <button class="flex ml-auto">Send</button>
          </div>
        </div>
      </template>
    </SplitterCompo>
  </div>
  <div v-else class="p-4">
    <p>Coming soon...</p>
  </div>
</template>

<script>
import SearchCompo from "../Reusable/SearchCompo.vue";
import { User, Inbox } from "lucide-vue-next";
import SplitterCompo from "../Reusable/SplitterCompo.vue";

export default {
  name: "MailsCompo",
  components: {
    SearchCompo,
    User,
    Inbox,
    SplitterCompo,
  },
  data() {
    return {
      inbox: [
        {
          index: 1,
          title: "Mail #",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
          index: 2,
          title: "Mail #",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
          index: 3,
          title: "Mail #",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
          index: 4,
          title: "Mail #",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
          index: 5,
          title: "Mail #",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
          index: 6,
          title: "Mail #",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
          index: 7,
          title: "Mail #",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
          index: 8,
          title: "Mail #",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
      ],
    };
  },
};
</script>
