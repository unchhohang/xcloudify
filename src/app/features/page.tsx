import Footer from "@src/components/Footer";
import Header from "@src/components/Header";
import Icon from "@src/components/Icon";
import Image from "next/image";

export default function page() {
  const fullSDN = [
    {
      imgPath: 'full-sdn-icon1.svg',
      title: 'Consistent Network Fabric',
      text: 'Uniform security policies from development laptops to multi-thousand-node clusters.'
    },
    {
      imgPath: 'full-sdn-icon2.svg',
      title: 'Flexible Workload Placement',
      text: 'Easily move instances without reconfiguring complex networking.'
    },
    {
      imgPath: 'full-sdn-icon3.svg',
      title: 'Consistent Network Fabric',
      text: 'Built-in isolation and policy enforcement, enabling you to securely host multiple clients and projects.'
    },
  ]

  const section5 = [
    {
      title: 'Marketplace Deployments',
      text: 'Prebuilt templates let you offer 1 GPU or entire GPU clusters on popular platforms such as RunPod, Shadeform, and Vast.ai.',
      imgPath: '/section5-1.png'
    },
    {
      title: 'LLM Inference Endpoints',
      text: 'Launch ready-to-use endpoints for models like DeepSeek, Qwen, LLaMA, and more. These can be consumed directly or integrated into LLM aggregators (e.g., OpenRouter.ai).',
      imgPath: '/section5-2.png'
    },
    {
      title: 'Easy Configuration',
      text: ' Simple wizards and step-by-step guidance ensure monetizing your GPU power is straightforward—even if you’re new to these marketplaces.',
      imgPath: '/section5-3.png'
    }
  ]

  const section7 = [
    {
      imgPath: '/section7-icon-1.png',
      title: 'AI & Machine Learning',
      text: 'Schedule GPU training jobs and CPU-based preprocessing with ease.'
    },
    {
      imgPath: '/section7-icon-2.png',
      title: 'cloud Gaming',
      text: 'Low-latency VMs and containers for gaming workloads with cross-region networking.'
    },
    {
      imgPath: '/section7-icon-3.png',
      title: 'Visual Effects & Rendering',
      text: 'Burst to additional on-demand GPU capacity for complex render farms.'
    },
    {
      imgPath: '/section7-icon-4.png',
      title: 'Edge Computing',
      text: 'Lightweight agents in remote devices, managed from a single console.'
    },
  ]

  return (
    <div>
      <Header
        title="Key Features & Benefits"
      />
      <div className="flex flex-col items-center my-25 gap-10 mx-35">
        <h2 className="">Single-Agent, Multi-Cloud Simplicity</h2>
        <p className="text-[#333333]">Most legacy orchestration platforms require multiple interdependent services deployed per region. Our solution consolidates all essential control services into a single agent you deploy on your hardware. For additional security and control, you can also host the entire control plane in your datacenter.</p>

        <div className="flex gap-10">
          <div className="flex flex-col gap-3 ">
            <h3 className="text-start">Easy Installation</h3>
            <p className="text-start text-transWhite">Deploy our single binary on any host—laptop, server, or a massive GPU cluster.</p>
            <h3 className="text-start">Instant Enrollment</h3>
            <p className="text-start text-transWhite"> In a cloud-hosted setup, the agent auto-registers with our management cloud. For self-hosted deployments, it connects securely to your on-prem control plane.</p>
            <h3 className="text-start">Reduced Operational Overhead</h3>
            <p className="text-start text-transWhite">Minimal infrastructure means fewer potential failure points and less time spent on maintenance.</p>
          </div>
          <Image
            src={'/board-collab-image.png'}
            width={1000}
            height={0}
            alt="Board collaboration image"
            className="object-cover"
          />

        </div>
      </div>
      <div className="py-20 px-30 bg-softPurple flex flex-col items-center gap-10 ">
        <h2>Full SDN Integration for Containers & VMs</h2>
        <p>Whether you’re deploying AI inferencing in containers or launching high-performance VMs for big data processing, our Software-Defined Network seamlessly connects workloads within and across regions.</p>
        <div className="flex gap-2">
          {
            fullSDN?.map((value, i) =>
              <div key={i} className="flex flex-col gap-1 bg-white p-5 flex-1 rounded-lg">
                <div className="mb-5">
                  <Icon imgPath={value?.imgPath} />

                </div>
                <h3 className="text-start">{value?.title}</h3>
                <p className="text-start leading-6 text-[#333333]">{value?.text}</p>
              </div>)
          }
        </div>
      </div>

      <div className="py-20  px-30 flex justify-center">
        <div className="flex gap-20">
          <Image
            className="flex-1 object-cover"
            src={'/feature-section2.png'}
            width={500}
            height={0}
            alt="section2 img"
          />
          <div className="flex flex-col gap-2 flex-1">
            <h2 className="text-start">Advanced Scheduling & Resilience</h2>
            <p className="text-start">Our platform orchestrates both GPU and CPU resources simultaneously. You can pin specific workloads to particular hosts, enable failover, and configure affinity/anti-affinity rules.</p>

            <h3 className="text-start">High Availability</h3>
            <p className="text-start">Automatic workload redistribution if a node fails.</p>
            <h3 className="text-start">Optimal Resource Utilization</h3>
            <p className="text-start">Intelligent scheduling to fully leverage your existing hardware.</p>
            <h3 className="text-start">Scalability</h3>
            <p className="text-start">Add or remove servers or entire regions on the fly.</p>
          </div>
        </div>

      </div>
      <div className="flex flex-col items-center py-20 px-30 gap-2 bg-softPurple">
        <h2>Monetization Templates</h2>
        <p className="">We make it simple to turn your GPU infrastructure into revenue:</p>
        <div className="flex gap-6">
          {
            section5?.map((value, i) => <div key={i} className="rounded-xl  flex flex-col gap-2 bg-white flex-1">
              <div className="p-5">
                <h3>{value?.title}</h3>
                <p className="text-[#333333] leading-6">{value?.text}</p>
              </div>
              <Image
                className="self-end justify-self-end mt-10"
                src={value?.imgPath}
                width={200}
                height={0}
                alt="image"
              />
            </div>)
          }
        </div>
      </div>

      <div className="py-20 px-30 flex flex-col gap-10" items-center>
        <h2 className="text-center">Simple, Predictable Pricing</h2>
        <p>Straightforward, transparent billing</p>
        <div className="flex gap-20 p-5">
          <div className="flex flex-col gap-2 justify-center">
            <h3 className="text-start">Per-System/Server, Per-Month</h3>
            <p className="text-start text-[#333333]">No hidden fees, no giant annual commitments.</p>
            <h3 className="text-start">Scale at Your Pace</h3>
            <p className="text-start">Launch a single server or thousands of GPU hosts—pay only for what’s deployed.</p>
            <h3 className="text-start">No Contract Lock-Ins</h3>
            <p className="text-start">Cancel anytime; upgrade or downgrade as needed.</p>
          </div>
          <Image
            src={'/section6.png'}
            width={400}
            height={0}
            alt="image section 6"
          />
        </div>
      </div>

      <div className="bg-softPurple py-20 px-30">
        <div className="  flex flex-col gap-10">
          <h2 className="text-center">Security & Encryption</h2>
          <p className="px-20">Choose cloud-hosted or self-hosted control planes, both with full end-to-end encryption. Only configuration data flows over the network; your actual datasets and VM contents remain private.</p>
          <div className="flex gap-10 justify-self-start">
            {section7?.map((value, i) =>
              <div key={i} className="bg-white p-5 flex flex-col gap-5 rounded-xl flex-1">
                <Icon imgPath={value?.imgPath} />
                <h3 className="mt-5">{value?.title}</h3>
                <div>
                  <p className="text-[#333333] leading-6">{value?.text}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>

  );
}
