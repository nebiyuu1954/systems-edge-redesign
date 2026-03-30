import { useMemo, useState, useEffect, type ReactElement } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import jobs from './jobsData';

export interface AllJobsPageProps {}

function AllJobsPage(_props: AllJobsPageProps): ReactElement {
  const navItems = [
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'locations', label: 'Locations', href: '#locations-heading' },
    { id: 'careers', label: 'Careers', href: '/careers' },
    { id: 'about', label: 'About Us', href: '/about-us' },
  ];

  const [searchParams] = useSearchParams();
  const initialDept = searchParams.get('dept') ?? '';
  const initialJob = searchParams.get('job') ?? '';
  const initialQuery = searchParams.get('q') ?? '';
  const initialFlex = searchParams.get('flex') ?? '';

  const [selectedDept, setSelectedDept] = useState<string>(initialDept);
  const [selectedJob, setSelectedJob] = useState<string>(initialJob);
  const [query, setQuery] = useState<string>(initialQuery);
  const [selectedFlex, setSelectedFlex] = useState<string>(initialFlex);

  useEffect(() => {
    setSelectedDept(searchParams.get('dept') ?? '');
    setSelectedJob(searchParams.get('job') ?? '');
    setQuery(searchParams.get('q') ?? '');
    setSelectedFlex(searchParams.get('flex') ?? '');
  }, [searchParams]);

  const jobOptionsMap = useMemo(() => {
    const map: Record<string, string[]> = {};
    jobs.forEach((j) => {
      const dept = j.department ?? 'Other';
      if (!map[dept]) map[dept] = [];
      if (j.title) map[dept].push(j.title);
    });
    return map;
  }, []);

  const workFlexOptions = ['Full-time', 'Hybrid', 'Contract'];

  // jobs are centralized in ./jobsData.ts

  const availableJobOptions = useMemo(() => (selectedDept ? jobOptionsMap[selectedDept] ?? [] : []), [selectedDept, jobOptionsMap]);

  const filteredJobs = useMemo(
    () =>
      jobs.filter((job) => {
        if (selectedDept && job.department !== selectedDept) return false;
        if (selectedJob && job.title !== selectedJob) return false;
        if (selectedFlex && !(job.flex?.includes(selectedFlex))) return false;
        if (query && query.trim() !== '') {
          const q = query.toLowerCase();
          const inTitle = job.title?.toLowerCase().includes(q);
          const inDesc = (job.description && job.description.toLowerCase().includes(q)) || (job.jobDescription && job.jobDescription.toLowerCase().includes(q));
          if (!inTitle && !inDesc) return false;
        }
        return true;
      }),
    [jobs, selectedDept, selectedJob, selectedFlex, query],
  );

  const [visibleCount, setVisibleCount] = useState<number>(6);

  useEffect(() => {
    setVisibleCount(6);
  }, [selectedDept, selectedJob, selectedFlex, query]);

  const visibleJobs = filteredJobs.slice(0, visibleCount);

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
                <input
                  className="w-full bg-surface-container-lowest/10 border-none rounded-xl py-5 pl-14 pr-6 text-white placeholder-on-primary-container/60 focus:ring-2 focus:ring-secondary transition-all outline-none text-lg h3-settings"
                  placeholder="Start your search"
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
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
            {visibleJobs.map((job) => (
              <article key={job.id} className="bg-background dark:bg-backgroundDark p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-xs font-bold tracking-widest text-secondary uppercase">{job.department}</span>
                    <span className="material-symbols-outlined text-outline-variant group-hover:text-secondary transition-colors">{job.icon}</span>
                  </div>

                  <h3 className="card-1-title-settings mb-4">{job.title}</h3>
                    <p className="card-1-description-settings dark:text-background mb-4 leading-relaxed">{job.description}</p>

                  <div className="mb-6 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {job.location && (
                      <div>
                        <span className="font-semibold">Location:</span>
                        <span className="ml-2">{job.location}</span>
                      </div>
                    )}

                    {job.jobType && (
                      <div>
                        <span className="font-semibold">Job Type:</span>
                        <span className="ml-2">{job.jobType}</span>
                      </div>
                    )}

                    {job.deadline && (
                      <div>
                        <span className="font-semibold">Job Deadline:</span>
                        <span className="ml-2">{job.deadline}</span>
                      </div>
                    )}

                    {job.education && (
                      <div>
                        <span className="font-semibold">Education Qualification:</span>
                        <span className="ml-2">{job.education}</span>
                      </div>
                    )}

                    {job.seniority && (
                      <div>
                        <span className="font-semibold">Seniority:</span>
                        <span className="ml-2">{job.seniority}</span>
                      </div>
                    )}

                    {job.experienceLevel && (
                      <div>
                        <span className="font-semibold">Experience Level:</span>
                        <span className="ml-2">{job.experienceLevel}</span>
                      </div>
                    )}

                    {job.skills && job.skills.length > 0 && (
                      <div>
                        <span className="font-semibold">Skills and Expertise:</span>
                        <span className="ml-2">{job.skills.join(', ')}</span>
                      </div>
                    )}

                    {job.workAddress && (
                      <div>
                        <span className="font-semibold">Work Address:</span>
                        <span className="ml-2">{job.workAddress}</span>
                      </div>
                    )}
                  </div>
                </div>

                <button className="flex items-center gap-2 font-bold text-secondary hover:text-secondary transition-colors">
                  <span className="card-1-description-settings">View Details</span>
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
              </article>
            ))}
          </div>

          {filteredJobs.length > visibleCount && (
            <div className="mt-20 text-center">
              <button
                onClick={() => setVisibleCount((v) => Math.min(v + 9, filteredJobs.length))}
                className="h3-settings bg-background text-primary px-10 py-4 rounded-xl font-bold hover:bg-surface-container-highest transition-all"
              >
                Load More Positions
              </button>
            </div>
          )}
        </div>
      </main>


      <Footer />
    </main>
  );
}

export default AllJobsPage;
