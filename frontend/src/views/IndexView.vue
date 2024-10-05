<template>
  <NavCompo />
  <main>
    <div class="background">
      <div></div>
      <div></div>
    </div>
    <SectionCompo class="h-100vh py-32">
      <template v-slot:content>
        <h1 class="mb-6 text-center">Simplify Your Business Management</h1>
        <p class="mb-6 text-grey-200 text-center">
          Effortless Invoicing & Seamless CRM Solutions at Your Fingertips.
        </p>
        <div class="flex gap-2 justify-center">
          <RouterLink to="/signup">
            <button class="danger">Get started</button>
          </RouterLink>
        </div>
      </template>
    </SectionCompo>
    <!-- begin features -->
    <SectionCompo>
      <template v-slot:content>
        <p class="text-red-200 text-center text-small mb-4">FEATURES</p>
        <h2 class="mb-4 text-center">
          Simplify invoicing and elevate customer relationships with our
          all-in-one SaaS!
        </h2>
        <p class="mb-6 text-grey-200 md:text-center">
          Revolutionize your invoicing and customer management with our
          all-in-one SaaS solution.<br />
          Effortlessly create invoices, track payments, and enhance client
          relationships to drive your business forward!
        </p>
        <div v-for="(feature, index) in features" :key="feature.index">
          <div
            class="flex flex-col md:flex-row justify-between gap-8 py-20"
            :class="{ 'md:flex-row-reverse': index % 2 !== 0 }"
          >
            <div class="flex flex-col justify-center m-auto">
              <h3 class="card-title mb-4 text-4xl">{{ feature.title }}</h3>
              <p class="text-grey-200">
                {{ feature.description }}
              </p>
            </div>
            <div>
              <img
                src="https://picsum.photos/600"
                class="w-full"
                style="object-fit: cover; border-radius: 0.75rem"
                alt=""
              />
            </div>
          </div>
        </div>
      </template>
    </SectionCompo>
    <!-- end features -->
    <!-- begin steps -->
    <SectionCompo>
      <template v-slot:content>
        <p class="text-red-200 text-center text-small mb-4">HOW TO START ?</p>
        <h2 class="mb-4 text-center">Just 5 steps to get started</h2>
        <div class="flex flex-col lg:grid lg:grid-cols-2 gap-4 mt-16">
          <div class="flex flex-col justify-between gap-4">
            <div class="card" v-for="step in steps">
              <div class="card-header flex-col">
                <h3 class="card-title">{{ step.index }} {{ step.title }}</h3>
                <p class="text-grey-200">{{ step.text }}</p>
              </div>
            </div>
          </div>
          <div class="display-desktop">
            <img
              src="https://picsum.photos/600"
              class="w-full"
              style="object-fit: cover; border-radius: 0.75rem"
              alt=""
            />
          </div>
        </div>
      </template>
    </SectionCompo>
    <!-- end steps -->
    <!-- begin keyfigures -->
    <SectionCompo>
      <template v-slot:content>
        <p class="text-red-200 text-center text-small mb-4">KEY FIGURES</p>
        <h2 class="mb-4 text-center">An all-in-one platform.</h2>
        <p class="mb-4 text-grey-200 text-center">
          Simplify your invoice management and optimize your customer
          relationships with our integrated CRM, to manage your business in
          complete serenity!
        </p>
        <div class="flex flex-col flex-wrap gap-4 mt-16">
          <div class="card" v-for="keyfigure in keyfigures">
            <div class="card-header items-center gap-4">
              <component
                :is="keyfigure.icon"
                :size="48"
                style="color: var(--red-200)"
              />
              <div class="flex flex-col">
                <h3 class="card-title">{{ keyfigure.figure }}</h3>
                <p class="text-grey-200">
                  {{ keyfigure.person }}
                </p>
              </div>
            </div>
            <div class="card-body">{{ keyfigure.text }}</div>
          </div>
        </div>
      </template>
    </SectionCompo>
    <!-- end keyfigures -->
    <!-- begin testimonials -->
    <SectionCompo>
      <template v-slot:content>
        <p class="text-red-200 text-center text-small mb-4">TESTIMONIALS</p>
        <h2 class="mb-4 text-center">We are attentive to our customers!</h2>
        <div class="flex flex-col gap-4 md:grid md:grid-cols-2 mt-16">
          <div class="flex flex-col card" v-for="testimonial in testimonials">
            <div class="card-header">
              <p class="mb-4">
                {{ testimonial.text }}
              </p>
            </div>
            <div class="card-body flex flex-row gap-4">
              <User
                :size="48"
                class="bg-red-100 text-red-200 p-2"
                style="border-radius: 50%"
              />
              <div>
                <h4 class="text-bold">{{ testimonial.person }}</h4>
                <p class="text-grey-200 mb-4">{{ testimonial.job }}</p>
              </div>
            </div>
          </div>
        </div>
      </template>
    </SectionCompo>
    <!-- end testimonials -->
    <!-- begin pricing -->
    <SectionCompo>
      <template v-slot:content>
        <p class="text-red-200 text-center text-small mb-4">PRICING</p>
        <h2 class="mb-4 text-center">Choose the plan that's right for you</h2>
        <div
          class="flex flex-col gap-4 max-w-96 md:max-w-full m-auto md:flex-row md:justify-between mt-16"
        >
          <div
            class="card"
            v-for="(pricing, index) in pricings"
            :style="{
              border: index % 2 !== 0 ? '1px solid var(--red-200)' : '',
              margin: index % 2 !== 0 ? '' : '2rem 0',
              filter: index % 2 !== 0 ? 'drop-shadow(0px 1px 50px var(--red-100))' : ''
            }"
          >
            <div class="card-header flex-col">
              <span class="card-title text-center">
                {{ pricing.title }}
              </span>
              <p class="text-small text-grey-200 text-center card-description">
                {{ pricing.description }}
              </p>
            </div>
            <div class="card-body flex-col">
              <p class="text-center">
                <span class="text-bold" style="font-size: 3rem"
                  >{{ pricing.price }}€</span
                >
                / month
              </p>

              <ul class="mt-2">
                <li
                  v-for="feature in pricing.features"
                  class="flex items-center gap-2 mb-4"
                >
                  <Check :size="20" style="color: var(--red-200)" />{{
                    feature
                  }}
                </li>
              </ul>
            </div>
            <div class="card-footer">
              <button
                class="w-full"
                :class="index % 2 !== 0 ? '' : 'secondary'"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </template>
    </SectionCompo>
    <!-- end pricing -->
    <!-- begin common questions -->
    <SectionCompo>
      <template v-slot:content>
        <p class="text-red-200 text-center text-small mb-4">FAQ</p>
        <h2 class="mb-4 text-center">Common Questions</h2>
        <div class="flex flex-col flex-wrap gap-4 mt-16">
          <ul class="flex flex-col gap-2">
            <li
              v-for="question in questions"
              :key="question.value"
              :value="question.value"
            >
              <div class="card p-2">
                <details name="question">
                  <summary>{{ question.title }}</summary>
                  <p class="text-grey-200 text-small">
                    {{ question.content }}
                  </p>
                </details>
              </div>
            </li>
          </ul>
        </div>
      </template>
    </SectionCompo>
    <!-- end common questions -->
    <!-- start free trial -->
    <SectionCompo>
      <template v-slot:content>
        <div class="py-32 bg-red-100 border-radius-375">
          <p class="text-red-200 text-center text-small mb-4">
            READY TO GET STARTED ?
          </p>
          <h2 class="mb-6 text-center">Start your free trial today.</h2>
          <RouterLink to="/signup" class="text-underline-none">
            <button class="flex m-auto danger">Get started</button>
          </RouterLink>
        </div>
      </template>
    </SectionCompo>
    <!-- start free trial -->
    <!-- begin creator -->
    <SectionCompo>
      <template v-slot:content>
        <div class="flex flex-col gap-4 md:grid md:grid-cols-2">
          <div>
            <h2 class="mb-4">About us</h2>
            <p class="mb-4">
              As a pioneering SaaS developer, we specialize in creating
              innovative solutions that streamline business operations,
              particularly in the realms of invoice management and customer
              relationship management (CRM). Our platform is designed to empower
              businesses of all sizes to enhance their financial processes,
              improve client interactions, and drive growth.
              <br /><br />
              We understand the challenges companies face when managing
              invoices, tracking payments, and maintaining customer
              relationships. That's why our development team utilizes
              cutting-edge technology to build a user-friendly interface that
              simplifies these tasks. Features like automated invoicing,
              real-time payment tracking, and customizable CRM tools allow our
              users to save time and enhance their efficiency.
              <br /><br />
              Our commitment to scalability ensures that as our clients grow,
              our software evolves with them. By integrating advanced analytics
              and reporting features, we provide businesses with insights that
              help them make informed decisions. Also, with robust security
              measures in place, our users can rest easy knowing their financial
              data and customer information are protected.
              <br /><br />
              At the heart of our development process is a passion for customer
              satisfaction. We actively gather feedback and continuously improve
              our platform to meet the changing needs of our users. With our
              innovative SaaS solution, managing invoices and nurturing customer
              relationships has never been easier.
              <br /><br />
              Partner with us today to leverage technology that transforms your
              financial operations and CRM strategies into a seamless
              experience!
            </p>
            <button>Read more</button>
          </div>
          <div class="display-none md:display-block">
            <img
              src="https://picsum.photos/600"
              class="w-full"
              style="object-fit: cover; border-radius: 0.75rem"
              alt=""
            />
          </div>
        </div>
      </template>
    </SectionCompo>
    <!-- end creator -->
    <!-- begin our team -->
    <SectionCompo>
      <template v-slot:content>
        <h2 class="mb-4 text-center">Our team</h2>
        <div class="flex flex-col gap-4 md:flex-row md:justify-between mt-16">
          <div class="flex flex-col justify-center" v-for="i in 3">
            <User
              :size="100"
              class="bg-red-100 text-red-200 p-4 m-auto mb-4"
              style="border-radius: 50%"
            />
            <h3 class="text-bold text-center">John Doe</h3>
            <p class="text-grey-200 text-center mb-4">Job title</p>
            <p class="text-center">
              Lorem ipsum dolor amet, consectetuer adipiscing. Aenean commodo
              ligula.
            </p>
          </div>
        </div>
      </template>
    </SectionCompo>
    <!-- end our team -->
    <!-- begin contact us -->
    <SectionCompo>
      <template v-slot:content>
        <div class="flex flex-col md:flex-row md:justify-between gap-4">
          <div class="flex flex-col gap-4">
            <div>
              <h2 class="mb-4">Contact us</h2>
              <p class="mb-6 text-grey">Get in touch and ask us anything</p>
            </div>
            <ul class="flex flex-col gap-4">
              <li class="flex gap-4 items-center">
                <Mail class="text-red-200" />support@blocsmaster.com
              </li>
              <li class="flex gap-4 items-center">
                <Phone class="text-red-200" />+1 (123) 123-1234
              </li>
              <li class="flex gap-4 items-center">
                <MapPin class="text-red-200" />28, Blocs Av., NoCode, 28000
                Blocsland
              </li>
            </ul>
          </div>
          <hr />
          <form>
            <div class="flex flex-col sm:flex-row justify-between sm:gap-4">
              <!-- Name -->
              <div class="field w-full">
                <label for="name">Name</label>
                <input id="name" type="text" placeholder="Name" required />
              </div>
              <!-- Email -->
              <div class="field w-full">
                <label for="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="mail@example.com"
                  required
                />
              </div>
            </div>
            <!-- Subject -->
            <div class="field">
              <label for="subject">Subject</label>
              <input id="subject" type="text" placeholder="Subject" required />
            </div>
            <!-- Textarea -->
            <div class="field mb-2">
              <label for="message">Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                rows="10"
                style="resize: none"
                required
              ></textarea>
            </div>
            <p class="text-small text-grey-200 mb-4">
              By clicking, you agree to our Terms & Conditions, Privacy and Data
              Protection Policy
            </p>
            <button type="submit">Send your message</button>
          </form>
        </div>
      </template>
    </SectionCompo>
    <!-- end contact us -->
  </main>
  <FooterCompo />
</template>
<script>
import NavCompo from "@/components/Layout/NavCompo.vue";
import SectionCompo from "@/components/Reusable/SectionCompo.vue";
import FooterCompo from "@/components/Layout/FooterCompo.vue";
import {
  Check,
  ChevronDown,
  Cuboid,
  Users,
  Building2,
  User,
  Mail,
  Phone,
  MapPin,
} from "lucide-vue-next";

export default {
  name: "IndexView",
  components: {
    NavCompo,
    SectionCompo,
    FooterCompo,
    Check,
    ChevronDown,
    Cuboid,
    Users,
    Building2,
    User,
    Mail,
    Phone,
    MapPin,
  },

  data() {
    return {
      testimonials: [
        {
          index: 0,
          person: "John",
          job: "Director",
          text: "This platform has revolutionized the way we work. The synchronization between invoice management and our CRM has really improved our efficiency.",
        },
        {
          index: 1,
          person: "Josh",
          job: "Manager",
          text: "With this solution, managing my invoices has become a breeze. I can finally focus on what really matters: my customers!",
        },
        {
          index: 2,
          person: "Marina",
          job: "Manager",
          text: "I have saved valuable time and my customer relationships have improved significantly since I use this SaaS. I can’t do without it!",
        },
        {
          index: 3,
          person: "Polo",
          job: "Manager",
          text: "The simplicity of use and the power of the features allowed me to manage my business more serenely. A real help in everyday life!",
        },
      ],
      keyfigures: [
        {
          index: 0,
          figure: "1500",
          person: "Customers",
          icon: Users,
          text: "Satisfied customers who are boosting their performance through our platform.",
        },
        {
          index: 1,
          figure: "2000",
          person: "Users",
          icon: Users,
          text: "Users are active each month on our SaaS solution.",
        },
        {
          index: 2,
          figure: "200",
          person: "Companies",
          icon: Building2,
          text: "Companies that have reduced their operational costs by 30% with our tool.",
        },
      ],
      steps: [
        {
          index: 1,
          title: "Registration and choice of plan",
          text: "Create an account by registering on our site and choose the plan that suits you.",
        },
        {
          index: 2,
          title: "Setting up your account",
          text: "Complete your company profile by adding your information and customize the billing settings.",
        },
        {
          index: 3,
          title: "Adding contacts and creating invoices",
          text: "Import your customer contacts and create your first invoice using our customizable templates.",
        },
        {
          index: 4,
          title: "Monitoring and management",
          text: "Use our dashboard to track payments, manage customer interactions and access analytics.",
        },
        {
          index: 5,
          title: "Monitoring and management",
          text: "Use our dashboard to track payments, manage customer interactions and access analytics.",
        },
      ],
      pricings: [
        {
          index: 0,
          title: "BASIC",
          price: 19,
          description: "Perfect for freelancers and small businesses.",
          features: [
            "Unlimited creation of invoices",
            "Payment tracking",
            "Management of customer contacts",
            "Email support",
          ],
        },
        {
          index: 1,
          title: "PRO",
          price: 39,
          description: "Ideal for SMEs with advanced needs.",
          features: [
            "All features of the Essential plan",
            "Management of quotations and reports",
            "Integration with accounting tools",
            "Live chat support",
          ],
        },
        {
          index: 2,
          title: "ENTREPRISE",
          price: 79,
          description: "Designed for growing businesses.",
          features: [
            "All the features of the Professional plan",
            "Automation of payment reminders",
            "Project management and custom API",
            "Dedicated support by phone and email",
          ],
        },
      ],
      questions: [
        {
          value: "1",
          title: "How can I access my invoices?",
          content:
            "You can access your invoices by logging into your account and navigating to the 'Billing' section. All your past invoices will be listed there for download.",
        },
        {
          value: "2",
          title: "What should I do if I find a discrepancy in my invoice?",
          content:
            "If you notice any discrepancies, please contact our support team within 30 days of the invoice date. Include your invoice number and details of the discrepancy to expedite resolution.",
        },
        {
          value: "3",
          title: "What payment methods do you accept for invoices?",
          content:
            "We accept various payment methods including credit/debit cards, PayPal, and bank transfers. You can choose your preferred method during the checkout process.",
        },
        {
          value: "4",
          title: "How do I access the CRM system?",
          content:
            "You can access the CRM by logging into your account and clicking on the 'CRM' tab on the dashboard. Ensure you have the required permissions to view this section.",
        },
        {
          value: "5",
          title: "How can I import my client data into the CRM?",
          content:
            "You can import client data by navigating to the 'Import' section in the CRM. We support CSV file formats for easy uploading of your contacts.",
        },
        {
          value: "6",
          title: "Can I customize user roles in the CRM?",
          content:
            "Yes, you can customize user roles and permissions in the settings area. This allows you to control who has access to various features of the CRM.",
        },
        {
          value: "7",
          title: "How can I track which invoices are paid or unpaid?",
          content:
            "In the 'Billing' section, you can view all your invoices along with their payment status. Unpaid invoices will be marked clearly, making it easy to follow up.",
        },
        {
          value: "8",
          title: "Does your CRM integrate with other tools?",
          content:
            "Yes, our CRM supports integrations with several popular tools like email platforms, project management software, and marketing automation tools. Check the integrations page for a full list.",
        },
        {
          value: "9",
          title: "What should I do if I forget my password?",
          content:
            "If you forget your password, click on the 'Forgot Password?' link on the login page. Follow the instructions to reset your password via the email associated with your account.",
        },
        {
          value: "10",
          title:
            "What support options are available for billing and CRM issues?",
          content:
            "We provide support through email, live chat, and a comprehensive knowledge base. Our support team is available during business hours and will assist you with any issues.",
        },
      ],
      features: [
        {
          title: "Capture opportunities like a lobster",
          description:
            "Capture opportunities like a lobster: Our CRM catches your leads as effectively as a lobster in its net, helping you never let go of a sale.",
        },
        {
          title: "Follow-up that’s a real treat",
          description:
            "Follow-up that’s a real treat: Enjoy a dashboard that gives you a tasty overview of your customers and your bills, like a lobster on a seafood platter.",
        },
        {
          title: "Hassle-free invoices",
          description:
            "Eliminate payment stress with our automated invoice generation, for a process as smooth as a stroll by the sea.",
        },
        {
          title: "Grow at the speed of a lobster",
          description:
            "Our solution allows you to quickly adapt your CRM strategy and invoice management, just like a lobster that moulds to grow.",
        },
        {
          title: "Lobster-style customer satisfaction",
          description:
            "Build strong relationships with your customers through our personalized follow-up, for an experience as delicious as a lobster dish.",
        },
        {
          title: "Crisp performance analytics",
          description:
            "Discover detailed reports that break down your data, allowing you to seize every opportunity accurately.",
        },
        {
          title: "No-pinch payment reminders",
          description:
            "Receive automatic alerts for your due payments, so your cash flow remains as dynamic as a swimming lobster.",
        },
      ],
    };
  },
};
</script>
<style scoped>
.background {
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(to right, #ffffff, #ffffff);
  display: flex;
  flex-grow: 1;
  z-index: -1;
}

.background div {
  position: absolute;
  border-radius: 100%;
  height: 0;
  filter: blur(240vw);
  opacity: 0.4;
}

.background div:nth-child(1) {
  background: linear-gradient(132deg, #e84a6c 0%, #ffffff 100%);
  width: 75%;
  padding-top: 75%;
  left: 4%;
  top: 28%;
  transform: translateX(-50%) translateY(-50%);
}

.background div:nth-child(2) {
  background: linear-gradient(132deg, #ffffff 0%, #e84a6c 100%);
  width: 63%;
  padding-top: 63%;
  left: 83%;
  top: 74%;
  transform: translateX(-50%) translateY(-50%);
}
</style>
