import { useMemo, useState, type ReactElement } from 'react';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';

export interface AllJobsPageProps {}

function AllJobsPage(_props: AllJobsPageProps): ReactElement {
  const navItems = [
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'locations', label: 'Locations', href: '#locations-heading' },
    { id: 'careers', label: 'Careers', href: '/careers' },
    { id: 'about', label: 'About Us', href: '/about-us' },
  ];

  const [selectedDept, setSelectedDept] = useState<string>('');
  const [selectedJob, setSelectedJob] = useState<string>('');
  const [selectedFlex, setSelectedFlex] = useState<string>('');

  const jobOptionsMap: Record<string, string[]> = {
    Engineering: ['Principal Systems Architect', 'Full-Stack Developer', 'Cloud Infrastructure Engineer'],
    Product: ['Technical Product Lead', 'Product Manager'],
    Design: ['Senior Product Designer', 'UX Researcher'],
    Security: ['Cybersecurity Specialist', 'Security Engineer'],
  };

  const workFlexOptions = ['Full-time', 'Hybrid', 'Contract'];

  const jobs = [
    {
      id: 'principal-systems-architect',
      department: 'Engineering',
      title: 'Principal Systems Architect',
      description:
        'Design and scale our core architectural frameworks to support high-concurrency cloud systems globally.',
      icon: 'terminal',
      flex: ['Full-time', 'Hybrid'],
    },
    {
      id: 'senior-product-designer',
      department: 'Design',
      title: 'Senior Product Designer',
      description: 'Shape the future of enterprise interfaces by crafting seamless, human-centric digital experiences.',
      icon: 'palette',
      flex: ['Full-time', 'Hybrid'],
    },
    {
      id: 'technical-product-lead',
      department: 'Product',
      title: 'Technical Product Lead',
      description: 'Bridge the gap between business strategy and engineering excellence for our flagship solutions.',
      icon: 'account_tree',
      flex: ['Full-time', 'Hybrid'],
    },
    {
      id: 'cloud-infra-engineer',
      department: 'Engineering',
      title: 'Cloud Infrastructure Engineer',
      description: 'Optimize our multi-region cloud footprint with cutting-edge automation and monitoring tools.',
      icon: 'cloud',
      flex: ['Full-time', 'Remote'],
    },
    {
      id: 'full-stack-developer',
      department: 'Engineering',
      title: 'Full-Stack Developer',
      description: 'Build robust end-to-end features using modern stacks to solve complex data visualization challenges.',
      icon: 'code',
      flex: ['Full-time', 'Hybrid', 'Contract'],
    },
    {
      id: 'cybersecurity-specialist',
      department: 'Security',
      title: 'Cybersecurity Specialist',
      description: 'Protect our global ecosystem by implementing proactive threat detection and defense protocols.',
      icon: 'shield',
      flex: ['Full-time', 'Contract'],
    },
  ];

  const availableJobOptions = useMemo(() => (selectedDept ? jobOptionsMap[selectedDept] ?? [] : []), [selectedDept]);

  const filteredJobs = useMemo(
    () =>
      jobs.filter((job) => {
        if (selectedDept && job.department !== selectedDept) return false;
        if (selectedJob && job.title !== selectedJob) return false;
        if (selectedFlex && !job.flex.includes(selectedFlex)) return false;
        return true;
      }),
    [jobs, selectedDept, selectedJob, selectedFlex],
  );

  return (
    <main className="bg-primary text-black dark:text-white">
      <Header navItems={navItems} ctaLabel="Get Consultation" ctaHref="#contact" logoSizeClass="h-20 sm:h-24 md:h-32 lg:h-40 xl:h-44" />

      <header className="primary-gradient py-20 px-8 text-white">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="h1-settings mb-4 text-white">All Jobs</h2>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-white h4-settings font-bold tracking-wide uppercase">
                81 open roles
              </div>
            </div>

            <div className="max-w-xl w-full">
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-primary-container/60">search</span>
                <input className="w-full bg-surface-container-lowest/10 border-none rounded-xl py-5 pl-14 pr-6 text-white placeholder-on-primary-container/60 focus:ring-2 focus:ring-secondary transition-all outline-none text-lg h3-settings" placeholder="Start your search" type="text" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative group">
              <select
                value={selectedDept}
                onChange={(e) => {
                  setSelectedDept(e.target.value);
                  setSelectedJob('');
                }}
                className={`w-full bg-surface-container-lowest/5 border ghost-border rounded-xl py-4 px-6 appearance-none focus:ring-2 focus:ring-secondary outline-none font-medium cursor-pointer text-white h3-settings`}
              >
                <option value="" className={selectedDept ? 'bg-white text-black' : 'bg-transparent text-white'}>
                  Select Department
                </option>
                {Object.keys(jobOptionsMap).map((dept) => (
                  <option key={dept} value={dept} className="bg-white text-black">
                    {dept}
                  </option>
                ))}
              </select>
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-60">expand_more</span>
            </div>

            <div className="relative group">
              <select
                value={selectedJob}
                onChange={(e) => setSelectedJob(e.target.value)}
                disabled={!selectedDept}
                className={`w-full bg-surface-container-lowest/5 border ghost-border rounded-xl py-4 px-6 appearance-none focus:ring-2 focus:ring-secondary outline-none font-medium cursor-pointer disabled:opacity-60 text-white h3-settings`}
              >
                <option value="" className={!selectedDept ? 'bg-transparent text-white' : 'bg-white text-black'}>
                  Select Job
                </option>
                {availableJobOptions.map((job) => (
                  <option key={job} value={job} className="bg-white text-black">
                    {job}
                  </option>
                ))}
              </select>
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-60">expand_more</span>
            </div>

            <div className="relative group">
              <select
                value={selectedFlex}
                onChange={(e) => setSelectedFlex(e.target.value)}
                className={`w-full bg-surface-container-lowest/5 border ghost-border rounded-xl py-4 px-6 appearance-none focus:ring-2 focus:ring-secondary outline-none font-medium cursor-pointer text-white h3-settings`}
              >
                <option value="" className={selectedFlex ? 'bg-white text-black' : 'bg-transparent text-white'}>
                  Work Flexibility
                </option>
                {workFlexOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-white text-black">
                    {opt}
                  </option>
                ))}
              </select>
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-60">expand_more</span>
            </div>
          </div>
        </div>
      </header>

      <main className="bg-backgroundOne dark:bg-backgroundDarkOne py-20 px-8">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 'principal-systems-architect',
                department: 'Systems & Infra',
                title: 'Principal Systems Architect',
                description: 'Design and scale our core architectural frameworks to support high-concurrency cloud systems globally.',
                icon: 'terminal',
              },
              {
                id: 'senior-product-designer',
                department: 'Product Design',
                title: 'Senior Product Designer',
                description: 'Shape the future of enterprise interfaces by crafting seamless, human-centric digital experiences.',
                icon: 'palette',
              },
              {
                id: 'technical-product-lead',
                department: 'Management',
                title: 'Technical Product Lead',
                description: 'Bridge the gap between business strategy and engineering excellence for our flagship solutions.',
                icon: 'account_tree',
              },
              {
                id: 'cloud-infra-engineer',
                department: 'Cloud Operations',
                title: 'Cloud Infrastructure Engineer',
                description: 'Optimize our multi-region cloud footprint with cutting-edge automation and monitoring tools.',
                icon: 'cloud',
              },
              {
                id: 'full-stack-developer',
                department: 'Full Stack',
                title: 'Full-Stack Developer',
                description: 'Build robust end-to-end features using modern stacks to solve complex data visualization challenges.',
                icon: 'code',
              },
              {
                id: 'cybersecurity-specialist',
                department: 'Security',
                title: 'Cybersecurity Specialist',
                description: 'Protect our global ecosystem by implementing proactive threat detection and defense protocols.',
                icon: 'shield',
              },
            ].map((job) => (
              <article key={job.id} className="bg-background dark:bg-backgroundDark p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-xs font-bold tracking-widest text-secondary uppercase">{job.department}</span>
                    <span className="material-symbols-outlined text-outline-variant group-hover:text-secondary transition-colors">{job.icon}</span>
                  </div>

                  <h3 className="card-1-title-settings mb-4">{job.title}</h3>
                  <p className="card-1-description-settings dark:text-white mb-8 leading-relaxed">{job.description}</p>
                </div>

                <button className="flex items-center gap-2 font-bold text-secondary hover:text-secondary transition-colors">
                  <span className="card-1-description-settings">View Details</span>
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
              </article>
            ))}
          </div>

          <div className="mt-20 text-center">
            <button className="h3-settings bg-background text-primary px-10 py-4 rounded-xl font-bold hover:bg-surface-container-highest transition-all">Load More Positions</button>
          </div>
        </div>
      </main>


      <Footer />
    </main>
  );
}

export default AllJobsPage;
