<template>
  <NavCompo />
  <main>
    <SectionCompo>
      <template v-slot:content>
        <h1 class="uk-h1 md:text-center">Management software</h1>
      </template>
    </SectionCompo>
    <!-- begin features -->
    <SectionCompo>
      <template v-slot:content>
        <h2 class="uk-h2">
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
          class="flex flex-col md:grid md:grid-rows-3 md:grid-flow-col gap-4"
        >
          <div class="uk-card" v-for="feature in features">
            <div class="uk-card-header">
              <h3 class="uk-card-title">{{ feature.title }}</h3>
              <p
                class="uk-margin-xsmall-top uk-text-small text-muted-foreground"
              >
                {{ feature.description }}
              </p>
            </div>
          </div>
        </div>
      </template>
    </SectionCompo>
    <!-- end features -->
    <!-- begin keyfigures -->
    <SectionCompo>
      <template v-slot:content>
        <h2 class="uk-h2">An all-in-one platform.</h2>
        <p class="mb-4">
          Simplify your invoice management and optimize your customer
          relationships with our integrated CRM, to manage your business in
          complete serenity!
        </p>
        <div class="flex flex-col flex-wrap gap-4">
          <div class="uk-card" v-for="keyfigure in keyfigures">
            <div class="uk-card-header">
              <h3 class="uk-card-title">{{ keyfigure.figure }}</h3>
              <p
                class="uk-margin-xsmall-top uk-text-small text-muted-foreground"
              >
                {{ keyfigure.person }}
              </p>
            </div>
            <div class="uk-card-body">{{ keyfigure.text }}</div>
          </div>
        </div>
      </template>
    </SectionCompo>
    <!-- end keyfigures -->
    <!-- begin steps -->
    <SectionCompo>
      <template v-slot:content>
        <h2 class="uk-h2 mb-4">How to start</h2>
        <div class="flex flex-col flex-wrap gap-4">
          <div class="uk-card" v-for="step in steps">
            <div class="uk-card-header">
              <h3 class="uk-card-title">{{ step.index }} {{ step.title }}</h3>
            </div>
            <div class="uk-card-body">{{ step.text }}</div>
          </div>
        </div>
      </template>
    </SectionCompo>
    <!-- end steps -->
    <!-- begin pricing -->
    <SectionCompo>
      <template v-slot:content>
        <h2 class="uk-h2 mb-4">
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
                <span class="uk-h2">{{ pricing.price }}€</span>/month
              </p>
              <ul>
                <li v-for="feature in pricing.features" class="flex">
                  <Check :size="20" />{{ feature }}
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
        <a href="#" class="flex justify-center link underline mt-4"
          >Start your 14-day free trial today!</a
        >
      </template>
    </SectionCompo>
    <!-- end pricing -->
    <!-- begin testimonials -->
    <SectionCompo>
      <template v-slot:content>
        <h2 class="uk-h2 mb-4">We are attentive to our customers!</h2>
        <div class="flex flex-col flex-wrap gap-4">
          <div class="uk-card" v-for="testimonial in testimonials">
            <div class="uk-card-header">
              <h3 class="uk-card-title">{{ testimonial.person }}</h3>
              <p
                class="uk-margin-xsmall-top uk-text-small text-muted-foreground"
              >
                {{ testimonial.job }}
              </p>
            </div>
            <div class="uk-card-body">{{ testimonial.text }}</div>
          </div>
        </div>
      </template>
    </SectionCompo>
    <!-- end testimonials -->
    <!-- begin common questions -->
    <SectionCompo>
      <template v-slot:content>
        <h2 class="uk-h2 mb-4">Common Questions</h2>
        <div class="flex flex-col flex-wrap gap-4">
          <ul uk-accordion>
            <li
              v-for="question in questions"
              :key="question.value"
              :value="question.value"
            >
              <a class="uk-accordion-title" href>
                <span>{{ question.title }}</span>
                <span class="size-2 uk-accordion-icon"><ChevronDown /></span>
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
    <!-- begin newsletter -->
    <SectionCompo>
      <template v-slot:content>
        <h2 class="uk-h2">The newsletter</h2>
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
    <!-- begin CTA -->
    <SectionCompo>
      <template v-slot:content>
        <h2 class="uk-h2">Ready to start ?</h2>
        <p class="mb-4">
          Sign up and discover how our solution can make your billing and
          customer relationship management easier!
        </p>
        <button class="uk-button uk-button-primary">Join Saas</button>
      </template>
    </SectionCompo>
    <!-- end CTA -->
    <!-- begin creator -->
    <SectionCompo>
      <template v-slot:content>
        <h2 class="uk-h2">About the creator of the Saas</h2>
        <p class="mb-2">Mika, Coder</p>
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
  </main>
  <FooterCompo />
</template>
<script>
import NavCompo from "@/components/layout/NavCompo.vue";
import SectionCompo from "@/components/reusable/SectionCompo.vue";
import FooterCompo from "@/components/layout/FooterCompo.vue";
import { Check, ChevronDown } from "lucide-vue-next";
export default {
  name: "IndexView",
  components: { NavCompo, SectionCompo, FooterCompo, Check, ChevronDown },
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
          text: "Satisfied customers who are boosting their performance through our platform.",
        },
        {
          index: 1,
          figure: "2000",
          person: "Users",
          text: "Users are active each month on our SaaS solution.",
        },
        {
          index: 2,
          figure: "200",
          person: "Companies",
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
          title: "Custom Invoice Creation",
          description:
            "Create professional invoices in just a few clicks. Choose from a variety of customizable templates, add your logo, include your contact information, and modify colors to reflect your brand identity. Save time and ensure every invoice aligns with your company's image.",
        },
        {
          title: "Automated Payment Tracking",
          description:
            "Never lose track of your payments with our automated tracking system. Receive notifications when your clients open invoices and generate automatic reminders for overdue payments. Stay in control of your cash flow while simplifying your follow-up process.",
        },
        {
          title: "Comprehensive CRM Integration",
          description:
            "Manage your clients and opportunities directly within our platform. With comprehensive CRM integration, track interaction history, manage contacts, and segment your clientele for targeted marketing campaigns. Strengthen your client relationships and boost your sales.",
        },
        {
          title: "Advanced Reporting and Analytics",
          description:
            "Access interactive dashboards and detailed reports on your financial performance. Analyze billing trends, track customer behavior, and identify areas for improvement. Make informed decisions to optimize your business strategy.",
        },
        {
          title: "Subscription Management",
          description:
            "Simplify the management of your subscriptions with our dedicated feature. Easily create, track, and manage your clients' subscriptions with automated billing cycles. Give your customers the flexibility of self-service options to modify, renew, or cancel their subscriptions.",
        },
        {
          title: "Multi-User Access with Custom Permissions",
          description:
            "Collaborate securely with your team through multi-user access. Assign roles and custom permissions to each team member to ensure efficient and secure management of invoices and customer data. Work together while protecting sensitive information.",
        },
      ],
    };
  },
};
</script>
