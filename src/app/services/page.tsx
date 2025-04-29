import CommonSection from "@src/components/CommonSection";
import Footer from "@src/components/Footer";
import Header from "@src/components/Header";
import { ITitleParagraph } from "@src/types";

export default function page() {
  const section1:ITitleParagraph[] = [
    {
      title: 'Deployment Model',
      paragraph: 'We redefine how you roll out new regions or data centers. By centralizing most control services either in our cloud or on your premises, you avoid the capital expense and complexity typical of older solutions.'
    },
    {
      title: 'Install the Agent',
      paragraph: 'Run our single binary on your chosen hardware.'
    },
    {
      title: 'Auto-Enrollment',
      paragraph: 'In a cloud-hosted setup, the agent connects securely to our management cloud. For fully on-prem deployments, it registers with your local control plane.'
    },
    {
      title: 'Launch Workloads',
      paragraph: `Use our intuitive web console or API to spin up containers, VMs, and more in minutes.
No separate message queuing services. No large database clusters. No frustration—just a streamlined platform that adapts to your compliance and operational requirements.`
    }
  ]

  const section2:ITitleParagraph[] = [
    {
      title: 'Professional Services & Expert Support',
      paragraph: 'Whether you’re deploying AI inferencing in containers or launching high-performance VMs for big data processing, our Software-Defined Network seamlessly connects workloads within and across regions.'
    },
    {
      title: 'Architecture Consulting',
      paragraph: 'Expert advice on designing your GPU cloud for optimal performance.'
    },
    {
      title: 'On-Site or Remote Deployment Assistance',
      paragraph: 'Help installing and configuring the agent, integrating with existing systems, or assisting in migration from older platforms.'
    },
    {
      title: 'Training & Knowledge Transfer',
      paragraph: 'Best practices for deploying, managing, and troubleshooting.'
    },
    {
      title: '24/7 Technical Support',
      paragraph: 'Ongoing maintenance and support to keep your GPU cloud running smoothly.'
    }
  ]

  const section3: ITitleParagraph[] = [
    {
      title: 'Seamless Integration & Migration',
      paragraph: ''
    },
    {
      title: 'Coexists with Legacy Systems',
      paragraph: 'Migrate at your own pace without disrupting active workloads.'
    },
    {
      title: 'Supports Hybrid Deployments',
      paragraph: 'Combine your hardware with public cloud resources, all managed through a single console.'
    },
    {
      title: 'Facilitates Gradual Adoption',
      paragraph: 'Start with a pilot project, then scale with confidence.'
    },
  ]

  const section4: ITitleParagraph[] = [
    {
      title: 'Meeting Data Sovereignty & Compliance Needs',
      paragraph:''
    },
    {
      title: 'Your Data Never Leaves the Datacenter',
      paragraph:'For self-hosted deployments, the entire control plane resides on-prem.'
    },
    {
      title: 'Compliance Simplified',
      paragraph:'Aligns with strict regulatory standards around data privacy.'
    },
    {
      title: 'Ongoing Updates & Support',
      paragraph:'We provide dedicated guidance to keep your on-prem control plane up to date.'
    },
  ]

  const section5:ITitleParagraph[] = [
    {
      title: 'Technical Data & Requirements',
      paragraph: 'Our orchestrator is designed for Linux-based environments and leverages cutting-edge technologies to ensure performance, flexibility, and security:'
    },
    {
      title: 'Base OS',
      paragraph: 'Tested on major Linux distributions (Ubuntu, Debian, CentOS, etc.)'
    },
    {
      title: 'Supported Workloads',
      paragraph: 'Orchestrates Docker containers and QEMU/Cloud-Hypervisor-based VMs'
    },
    {
      title: 'Networking',
      paragraph: `Uses VXLAN encapsulation with hardware offloading via Open vSwitch
Network ACLs enforced via OpenFlow rules, capable of wire-speed performance on supported NICs (e.g., Mellanox, Intel)`
    },
    {
      title: 'Storage Backend',
      paragraph: 'Typically provisioned via Ceph, though other distributed or local storage solutions may be supported'
    },
    {
      title: 'Bare Meta',
      paragraph: ` We do not currently orchestrate bare-metal operations (future plans). Pair with a hardware orchestrator like:
         Ubuntu MAAS
         Tinkerbell`
    },
  ]

  const section6:ITitleParagraph[] = [
    {
      title: 'Repurposing Old Ethereum Mining Hardware',
      paragraph: ''
    },
    {
      title: 'Client',
      paragraph: 'A small regional data center operator'
    },
    {
      title: 'Challenge',
      paragraph: 'Idle GPU mining rigs post-Ethereum merge; needed a cost-effective way to transform them into revenue-generating resources.'
    },
    {
      title: 'Solution',
      paragraph: ' Installed our single-agent platform on each rig; avoided large controller clusters. Launched a GPUaaS offering to local businesses and developers.'
    },
    {
      title: 'Result',
      paragraph: `Turned depreciated mining rigs into profitable compute resources
Lower capital and operational expenses
Attracted AI-focused customers needing on-demand GPU compute`
    },
  ]
    
  return (
    <div>
      <Header title={'Deployment, Services & Success Stories'} />
      <CommonSection
        imgPath="/services-section1.png"
        titleParagraph={section1}
      />
      <CommonSection
        imgPath="/services-section2.png"
        titleParagraph={section2}
        bgColor={'#F5F3FF'}
        rev={true}
      />
      <CommonSection
        imgPath="/services-section3.png"
        titleParagraph={section3}
      />
      <CommonSection
        imgPath="/services-section4.png"
        titleParagraph={section4}
        bgColor={'#F5F3FF'}
        rev={true}
      />
      <CommonSection
        imgPath="/services-section5.png"
        titleParagraph={section5}
      />
      <CommonSection
        imgPath="/services-section6.png"
        titleParagraph={section6}
        title="Real-World Success Stories"
        bgColor={'#F5F3FF'}
        rev={true}
      />

      <Footer />
    </div>
  );
}
