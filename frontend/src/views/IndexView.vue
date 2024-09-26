<template>
  <NavCompo />
  <main>
    <div class="background">
      <div></div>
      <div></div>
    </div>

    <SectionCompo>
      <template v-slot:content>
        <h1 class="text-5xl font-500 mb-4">
          Ready to Simplify Your Business Management?
        </h1>
        <p class="mb-4">
          Effortless Invoicing & Seamless CRM Solutions at Your Fingertips.<br />Take
          control of your finances and customer relationships with our
          all-in-one platform.<br />Start your free trial today and transform
          the way you manage your business!
        </p>
        <div class="flex gap-2">
          <button class="uk-button uk-button-primary">Get started</button>
          <button class="uk-button uk-button-default">Request a demo</button>
        </div>
      </template>
    </SectionCompo>

    <!-- begin features -->
    <SectionCompo>
      <template v-slot:content>
        <h2 class="text-4xl font-500 mb-4">
          Simplify invoicing and elevate customer relationships with our
          all-in-one SaaS!
        </h2>
        <p class="mb-4">
          Revolutionize your invoicing and customer management with our
          all-in-one SaaS solution.<br />
          Effortlessly create invoices, track payments, and enhance client
          relationships to drive your business forward!
        </p>
        <div
          class="flex flex-col md:grid md:grid-rows-3 md:grid-cols-3 md:grid-flow-col gap-4"
        >
          <div class="uk-card" v-for="feature in features">
            <div class="uk-card-header flex flex-col sm:flex-row gap-4">
              <div>
                <Cuboid :size="48" style="color: var(--red)" />
              </div>
              <div class="flex flex-col">
                <h3 class="uk-card-title">{{ feature.title }}</h3>
                <p
                  class="uk-margin-xsmall-top uk-text-small text-muted-foreground"
                >
                  {{ feature.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </template>
    </SectionCompo>
    <!-- end features -->
    <!-- begin keyfigures -->
    <SectionCompo>
      <template v-slot:content>
        <h2 class="text-4xl font-500 mb-4">An all-in-one platform.</h2>
        <p class="mb-4">
          Simplify your invoice management and optimize your customer
          relationships with our integrated CRM, to manage your business in
          complete serenity!
        </p>
        <div class="flex flex-col flex-wrap gap-4">
          <div class="uk-card" v-for="keyfigure in keyfigures">
            <div class="uk-card-header flex items-center gap-4">
              <component
                :is="keyfigure.icon"
                :size="48"
                style="color: var(--red)"
              />

              <div class="flex flex-col">
                <h3 class="uk-card-title">{{ keyfigure.figure }}</h3>
                <p
                  class="uk-margin-xsmall-top uk-text-small text-muted-foreground"
                >
                  {{ keyfigure.person }}
                </p>
              </div>
            </div>
            <div class="uk-card-body">{{ keyfigure.text }}</div>
          </div>
        </div>
      </template>
    </SectionCompo>
    <!-- end keyfigures -->
    <!-- begin testimonials -->
    <SectionCompo>
      <template v-slot:content>
        <h2 class="text-4xl font-500 mb-4">
          We are attentive to our customers!
        </h2>
        <div class="flex flex-col flex-wrap gap-4">
          <div class="uk-card" v-for="testimonial in testimonials">
            <div class="uk-card-header flex items-center gap-4">
              <User :size="48" style="color: var(--red)" />
              <div class="flex flex-col">
                <h3 class="uk-card-title">{{ testimonial.person }}</h3>
                <p
                  class="uk-margin-xsmall-top uk-text-small text-muted-foreground"
                >
                  {{ testimonial.job }}
                </p>
              </div>
            </div>
            <div class="uk-card-body">{{ testimonial.text }}</div>
          </div>
        </div>
      </template>
    </SectionCompo>
    <!-- end testimonials -->
    <!-- begin steps -->
    <SectionCompo>
      <template v-slot:content>
        <h2 class="text-4xl font-500 mb-4">How to start</h2>
        <div class="flex flex-col lg:grid lg:grid-cols-2 gap-4">
          <div class="flex flex-col justify-between gap-4">
            <div class="uk-card" v-for="step in steps">
              <div class="uk-card-header">
                <h3 class="uk-card-title">{{ step.index }} {{ step.title }}</h3>
                <p>{{ step.text }}</p>
              </div>
            </div>
          </div>
          <div class="display-desktop">
            <img
              src="https://picsum.photos/600"
              class="w-full"
              style="object-fit: cover; border-radius: 0.75rem;"
              alt=""
            />
          </div>
        </div>
      </template>
    </SectionCompo>
    <!-- end steps -->
    <!-- begin pricing -->
    <SectionCompo>
      <template v-slot:content>
        <h2 class="text-4xl font-500 mb-4">
          Optimize your business management: invoices and CRM in one tool!
        </h2>
        <div
          class="flex flex-col md:flex-row justify-center md:justify-between gap-4"
        >
          <div
            class="uk-card md:flex md:flex-col md:justify-between"
            v-for="pricing in pricings"
          >
            <div class="uk-card-header">
              <h3 class="uk-card-title">{{ pricing.title }}</h3>
              <p
                class="uk-margin-xsmall-top uk-text-small text-muted-foreground"
              >
                {{ pricing.description }}
              </p>
            </div>
            <div class="uk-card-body">
              <p>
                <span class="uk-h2">{{ pricing.price }}€</span>
                / month
              </p>
              <ul class="mt-2">
                <li
                  v-for="feature in pricing.features"
                  class="flex items-center gap-2"
                >
                  <Check :size="20" style="color: var(--red)" />{{ feature }}
                </li>
              </ul>
            </div>
            <div class="uk-card-footer">
              <button class="w-full uk-button uk-button-primary">
                Buy now
              </button>
            </div>
          </div>
        </div>
        <a
          href="#"
          class="flex justify-center underline mt-4 text-primary"
          style="color: var(--red)"
          >Start your 14-day free trial today!</a
        >
      </template>
    </SectionCompo>
    <!-- end pricing -->
    <!-- begin common questions -->
    <SectionCompo>
      <template v-slot:content>
        <h2 class="text-4xl font-500 mb-4">Common Questions</h2>
        <div class="flex flex-col flex-wrap gap-4">
          <ul uk-accordion>
            <li
              v-for="question in questions"
              :key="question.value"
              :value="question.value"
            >
              <a class="uk-accordion-title" href>
                <span>{{ question.title }}</span>
                <span class="size-2 uk-accordion-icon"
                  ><ChevronDown style="color: var(--red)"
                /></span>
              </a>
              <div class="uk-accordion-content">
                {{ question.content }}
              </div>
            </li>
          </ul>
        </div>
      </template>
    </SectionCompo>
    <!-- end common questions -->
    <!-- begin creator -->
    <SectionCompo class="bg-danger text-secondary">
      <template v-slot:content>
        <h2 class="text-4xl font-500 mb-4">About us</h2>
        <p class="mb-2">
          As a pioneering SaaS developer, we specialize in creating innovative
          solutions that streamline business operations, particularly in the
          realms of invoice management and customer relationship management
          (CRM). Our platform is designed to empower businesses of all sizes to
          enhance their financial processes, improve client interactions, and
          drive growth.
          <br /><br />
          We understand the challenges companies face when managing invoices,
          tracking payments, and maintaining customer relationships. That's why
          our development team utilizes cutting-edge technology to build a
          user-friendly interface that simplifies these tasks. Features like
          automated invoicing, real-time payment tracking, and customizable CRM
          tools allow our users to save time and enhance their efficiency.
          <br /><br />
          Our commitment to scalability ensures that as our clients grow, our
          software evolves with them. By integrating advanced analytics and
          reporting features, we provide businesses with insights that help them
          make informed decisions. Also, with robust security measures in place,
          our users can rest easy knowing their financial data and customer
          information are protected.
          <br /><br />
          At the heart of our development process is a passion for customer
          satisfaction. We actively gather feedback and continuously improve our
          platform to meet the changing needs of our users. With our innovative
          SaaS solution, managing invoices and nurturing customer relationships
          has never been easier.
          <br /><br />
          Partner with us today to leverage technology that transforms your
          financial operations and CRM strategies into a seamless experience!
        </p>
      </template>
    </SectionCompo>
    <!-- end creator -->
    <!-- begin contact us -->
    <SectionCompo>
      <template v-slot:content>
        <h2 class="text-4xl font-500 mb-4">Contact us</h2>
        <p class="mb-4">Get in touch and ask us anything</p>
        <form>
          <div class="flex flex-col sm:flex-row justify-between sm:gap-4">
            <div class="w-full mb-2">
              <label for="email">Name</label>
              <input
                class="uk-input"
                id="name"
                type="text"
                aria-describedby="name-help-block"
                placeholder="Your name"
              />
            </div>
            <div class="w-full mb-2">
              <label for="email">Email</label>
              <input
                class="uk-input"
                id="email"
                type="email"
                aria-describedby="name-help-block"
                placeholder="mail@example.com"
              />
            </div>
          </div>
          <div class="mb-2">
            <label for="email">Subject</label>
            <input
              class="uk-input"
              id="subject"
              type="text"
              aria-describedby="name-help-block"
              placeholder="Subject"
            />
          </div>
          <div class="mb-4">
            <label for="messag">Message</label>
            <textarea
              class="uk-textarea"
              placeholder="Your message here"
              name=""
              id="message"
              rows="10"
              style="resize: none"
            ></textarea>
          </div>
          <button class="uk-button uk-button-primary">Send your message</button>
        </form>
      </template>
    </SectionCompo>
    <!-- end contact us -->
    <!-- begin newsletter -->
    <SectionCompo class="bg-muted">
      <template v-slot:content>
        <h2 class="text-4xl font-500 mb-4">The newsletter</h2>
        <p class="mb-4">
          Sign up for tips about working in Saas, news about our apps, and more.
        </p>
        <div class="flex flex-wrap gap-4">
          <input
            type="email"
            placeholder="Your email address"
            class="uk-input w-96"
          />
          <button class="uk-button uk-button-primary">Subscribe</button>
        </div>
      </template>
    </SectionCompo>
    <!-- end newsletter -->
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
          title: "Basic Plan - 'Essential'",
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
          title: "Standard plan - 'Professional'",
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
          title: "Advanced Plan - 'Enterprise'",
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
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
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
  width: 77%;
  padding-top: 77%;
  left: 12%;
  top: 0%;
  transform: translateX(-50%) translateY(-50%);
}

.background div:nth-child(2) {
  background: linear-gradient(132deg, #ffffff 0%, #e84a6c 100%);
  width: 143%;
  padding-top: 143%;
  left: 100%;
  top: 100%;
  transform: translateX(-50%) translateY(-50%);
}
</style>
