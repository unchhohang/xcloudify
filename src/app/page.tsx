import Card from "@src/components/Card";
import Footer from "@src/components/Footer";
import HomeHeader from "@src/components/HomeHeader";
import Accordion from "@src/components/Accordion";

export default function Home() {
  const accordItems = [
    'How can I access the Mondai Team Management Dashboard?',
    'Where can I find help using the Mondai Team Management Dashboard?',
    'How do I add team members to the Mondai Team Management Dashboard?',
    'How can I upgrade to a higher plan?',
    'How Can I Contact the Mondai Support Team?'
  ]

  return (
   <div>
      <HomeHeader
        title="Revolutionize GPU Cloud Scaling with a Modern GPUaaS Platform"
        subTitle=" Accelerate your cloud business with our single-agent GPU orchestration solution that simplifies operations, lowers costs, and delivers flexible, on-demand GPU capabilities."
      />
      <div className="flex flex-col items-center mt-70 ">
        <h2 className="my-10 mx-12">A Modern Way to Build and Scale Your GPU Cloud</h2>
        <p className="px-52">Accelerate your cloud business with a single-agent solution that simplifies operations, lowers costs, and delivers flexible, on-demand GPU (and CPU) capabilities—without the steep learning curve of legacy platforms.</p>

      </div>
      <div className="grid grid-cols-6 gap-4 my-10 mx-30 items-stretch">
        <div className="col-span-2  ">
          <Card
            imagePath="/grid-board-1.png"
            title="Zero-Capex Regional
Deployments"
            text="Eliminate the usual upfront hardware and deployment costs. Our platform lets you roll out a complete cloud region by simply installing an agent on each server—and if you need an on-prem solution for strict data compliance, we can provide that too."
          />

        </div>
        <div className="col-span-2  ">
          <Card
            imagePath="/grid-board-2.png"
            title="Unified Workload Scheduling"
            text="Host both virtual machines and containers on the same node, harnessing GPU or CPU resources as needed. Our integrated SDN ensures secure, seamless networking between instances, across regions."
          />
        </div>
        <div className="col-span-2  ">
          <Card
            imagePath="/grid-board-3.png"
            title="Flexible, Transparent Pricing"
            text="With a low per-server, per-month subscription, you only pay for what you actually use. There’s no minimum, no maximum, and no lock-in contracts."
          />
        </div>
        <div className="col-span-3  ">
          <Card
            imagePath="/grid-board-4.png"
            title="Enterprise-Grade Consulting & Support"
            text="Our highly experienced team offers professional services, deployment support, and ongoing consulting. Whether you’re expanding a data center or spinning up a brand-new site, we’re here to help."
          />
        </div>
        <div className="col-span-3 " >
          <Card
            imagePath="/grid-board-5.png"
            title="Secure Data Handling"
            text="Choose cloud-hosted or self-hosted control planes based on your compliance needs. In both cases, all traffic is end-to-end encrypted, ensuring your data is protected at every stage. For data-sensitive workloads, our self-hosted option ensures no information ever leaves your premises."
          />
        </div>
      </div>

      <div className="my-4  flex flex-col items-center ">
        <h2 className="my-10 mx-22">A Modern Way to Build and Scale Your GPU Cloud</h2>
        <div className="w-[70%]">
          {accordItems?.map((value, i) => <Accordion key={i} question={value} />)}
        </div>
      </div>

      <Footer />
    </div>
  );
}
