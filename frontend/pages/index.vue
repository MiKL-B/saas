<template>
  <div class="background">
    <div></div>
  </div>
  <section class="py-40 px-4">
    <h1 class="text-6xl mb-2 lg:text-center">Management software</h1>
    <p class="mb-4 lg:text-center">
      Optimize your invoice management and strengthen your customer
      relationships with our intuitive SaaS solution: simplify your daily life
      and boost your growth in one click!
    </p>
    <Button class="lg:flex lg:m-auto">Begin now</Button>
  </section>
  <!-- begin features -->
  <section id="features" class="py-16 px-4">
    <h2 class="text-4xl mb-2 lg:text-center">
      Simplify invoicing and elevate customer relationships with our all-in-one
      SaaS!
    </h2>
    <p class="lg:text-center">
      Revolutionize your invoicing and customer management with our all-in-one
      SaaS solution.
    </p>
    <p class="mb-4 lg:text-center">
      Effortlessly create invoices, track payments, and enhance client
      relationships to drive your business forward!
    </p>
    <div
      class="flex flex-col lg:grid lg:grid-rows-3 grid-flow-col flex-wrap gap-4 lg:max-w-7xl lg:mx-auto"
    >
      <Card v-for="feature in features">
        <CardHeader>
          <CardTitle>{{ feature.title }}</CardTitle>
          <CardDescription>{{ feature.description }}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  </section>
  <!-- end features -->
  <!-- begin keyfigures -->
  <section class="py-16 px-4">
    <h2 class="text-4xl mb-2 lg:text-center">An all-in-one platform.</h2>
    <p class="mb-4 lg:text-center">
      Simplify your invoice management and optimize your customer relationships
      with our integrated CRM, to manage your business in complete serenity!
    </p>
    <div class="flex flex-col flex-wrap gap-4 lg:max-w-7xl lg:mx-auto">
      <Card v-for="keyfigure in keyfigures">
        <CardHeader>
          <CardTitle>{{ keyfigure.figure }}</CardTitle>
          <CardDescription>{{ keyfigure.person }}</CardDescription>
        </CardHeader>
        <CardContent>{{ keyfigure.text }}</CardContent>
      </Card>
    </div>
  </section>
  <!-- end keyfigures -->
  <!-- begin steps -->
  <section class="py-16 px-4">
    <h2 class="text-4xl mb-4 lg:text-center">How to start</h2>
    <div class="flex flex-col flex-wrap gap-4 lg:max-w-7xl lg:mx-auto">
      <Card v-for="step in steps">
        <CardHeader>
          <CardTitle>{{ step.index }} {{ step.title }}</CardTitle>
        </CardHeader>
        <CardContent>{{ step.text }}</CardContent>
      </Card>
    </div>
  </section>
  <!-- end steps -->
  <!-- begin pricing -->
  <section id="pricing" class="py-16 px-4">
    <h2 class="text-4xl mb-4 lg:text-center">
      Optimize your business management: invoices and CRM in one tool!
    </h2>
    <div
      class="flex flex-wrap justify-center lg:justify-between gap-4 lg:max-w-7xl lg:mx-auto"
    >
      <Card v-for="pricing in pricings" class="w-96">
        <CardHeader>
          <CardTitle>{{ pricing.title }}</CardTitle>
          <CardDescription>{{ pricing.description }}</CardDescription>
        </CardHeader>
        <CardContent>
          <p class="mb-4">
            <span class="font-semibold text-4xl">{{ pricing.price }}€</span
            >/month
          </p>
          <ul>
            <li v-for="feature in pricing.features">
              <Icon name="uil:check" style="color: black" />{{ feature }}
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button class="w-full">Buy now</Button>
        </CardFooter>
      </Card>
    </div>
    <p class="link underline cursor-pointer my-4 text-center">
      Start your 14-day free trial today!
    </p>
  </section>
  <!-- end pricing -->
  <!-- begin testimonials -->
  <section class="py-16 px-4">
    <h2 class="text-4xl mb-4 lg:text-center">
      We are attentive to our customers!
    </h2>
    <div class="flex flex-col flex-wrap gap-4 lg:max-w-7xl lg:mx-auto">
      <Card v-for="testimonial in testimonials">
        <CardHeader>
          <CardTitle>{{ testimonial.person }}</CardTitle>
          <CardDescription>{{ testimonial.job }}</CardDescription>
        </CardHeader>
        <CardContent>{{ testimonial.text }}</CardContent>
      </Card>
    </div>
  </section>
  <!-- end testimonials -->
  <!-- begin common questions -->
  <section class="py-16 px-4">
    <h2 class="text-4xl mb-4 lg:text-center">Common Questions</h2>
    <div class="flex flex-col flex-wrap gap-4 lg:max-w-7xl lg:mx-auto">
      <Accordion
        type="single"
        class="w-full"
        collapsible
        :default-value="defaultValue"
      >
        <AccordionItem
          v-for="question in questions"
          :key="question.value"
          :value="question.value"
        >
          <AccordionTrigger>{{ question.title }}</AccordionTrigger>
          <AccordionContent>
            {{ question.content }}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </section>
  <!-- end common questions -->
  <!-- begin newsletter -->
  <section class="py-16 px-4">
    <h2 class="text-4xl mb-2 lg:text-center">The newsletter</h2>
    <p class="mb-4 lg:text-center">
      Sign up for tips about working in Saas, news about our apps, and more.
    </p>
    <div class="flex flex-wrap gap-4 lg:justify-center">
      <Input type="email" placeholder="Your email address" class="w-96" />
      <Button>Subscribe</Button>
    </div>
  </section>
  <!-- end newsletter -->
  <!-- begin CTA -->
  <section class="py-16 px-4">
    <h2 class="text-4xl mb-2 lg:text-center">Ready to start ?</h2>
    <p class="mb-4 lg:text-center">
      Sign up and discover how our solution can make your billing and customer
      relationship management easier!
    </p>
    <Button class="flex lg:m-auto">Join Saas</Button>
  </section>
  <!-- end CTA -->
  <!-- begin creator -->
  <section class="py-16 px-4">
    <h2 class="text-4xl mb-2 lg:text-center">About the creator of the Saas</h2>
    <p class="mb-4 lg:text-center">Mika, Coder</p>
    <p class="lg:max-w-7xl lg:mx-auto mb-2">
      As a pioneering SaaS developer, we specialize in creating innovative
      solutions that streamline business operations, particularly in the realms
      of invoice management and customer relationship management (CRM). Our
      platform is designed to empower businesses of all sizes to enhance their
      financial processes, improve client interactions, and drive growth.
    </p>
    <p class="lg:max-w-7xl lg:mx-auto mb-2">
      We understand the challenges companies face when managing invoices,
      tracking payments, and maintaining customer relationships. That's why our
      development team utilizes cutting-edge technology to build a user-friendly
      interface that simplifies these tasks. Features like automated invoicing,
      real-time payment tracking, and customizable CRM tools allow our users to
      save time and enhance their efficiency.
    </p>
    <p class="lg:max-w-7xl lg:mx-auto mb-2">
      Our commitment to scalability ensures that as our clients grow, our
      software evolves with them. By integrating advanced analytics and
      reporting features, we provide businesses with insights that help them
      make informed decisions. Also, with robust security measures in place, our
      users can rest easy knowing their financial data and customer information
      are protected.
    </p>
    <p class="lg:max-w-7xl lg:mx-auto mb-2">
      At the heart of our development process is a passion for customer
      satisfaction. We actively gather feedback and continuously improve our
      platform to meet the changing needs of our users. With our innovative SaaS
      solution, managing invoices and nurturing customer relationships has never
      been easier.
    </p>
    <p class="lg:max-w-7xl lg:mx-auto">
      Partner with us today to leverage technology that transforms your
      financial operations and CRM strategies into a seamless experience!
    </p>
  </section>
  <!-- end creator -->
</template>
<script>
export default {
  name: "Index",
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
<style>
.background {
  position: absolute;
  overflow: hidden;
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
  background: linear-gradient(132deg, #5676e4 0%, #375ee1 100%);
  width: 42%;
  padding-top: 42%;
  left: 85%;
  top: 54%;
  transform: translateX(-50%) translateY(-50%);
}
</style>
