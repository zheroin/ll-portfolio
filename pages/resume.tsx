import Bar from "../components/Bar";
import { languages, tools } from "../data";
const Resume = () => {
  return (
    <div className="px-6 py-2">
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="my-3 text-2xl font-bold text-green">Education</h3>
          <div className="">
            <h4 className="my-2 text-xl font-bold">
              Computer Science Engineering
            </h4>
            <p className="font-semibold">
              Russian Armenian University (2016-2020)
            </p>
            <p className="my-3">
              I am currently pursuing B.tech in Computer Science Engineering
              from Slavonic University
            </p>
            <h4 className="my-2 text-xl font-bold">JavaScript Cource</h4>
            <p className="font-semibold">
              Armenian Code Academy (04/2019-09/2029)
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold text-green">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Software Developer Jr.</h5>
            <p className="font-semibold">Freelancer</p>
            <p className="my-3">I don't know why I am doing this job</p>
          </div>
        </div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h3 className="my-3 text-2xl font-bold text-green">
            Language & Framework
          </h3>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="my-3 text-2xl font-bold text-green">
            Tools & Softwares
          </h3>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
