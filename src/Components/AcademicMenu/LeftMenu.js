import React from "react";
import Link from "next/link";

function LeftMenu() {
  return (
    <div>
      <div className="template__sidebar">
        <ul>
          <li className="">
            <h3>UG Programmes</h3>
            <ul>
              <li className="">
                <Link href="/course-ballb-hons">B.A.LL.B. (Hons.)</Link>
              </li>
              {/* <li className="">
                <Link href="/course-bballb-hons">B.B.A.LL.B.(Hons.)</Link>
              </li> */}
            </ul>
          </li>
          <li className="">
            <h3>B.A. LL.B. (Hons.) Course Catalogue</h3>
            <ul>
              <li className="">
                <Link href="/course-catalogue-b.b.a.ll.B-hons-1">
                  B.B.A.LL.B. (Hons.) Semester I
                </Link>
              </li>
              <li className="">
                <Link href="/course-catalogue-b.b.a.ll.B-hons-2">
                  B.B.A.LL.B. (Hons.) Semester II
                </Link>
              </li>
              <li className="">
                <Link href="/course-catalogue-b.a.ll.B-hons-semester-1">
                  B.A.LL.B. (Hons.) Semester-I
                </Link>
              </li>
              <li className="">
                <Link href="/course-catalogue-b.a.ll.B-hons-semester-2">
                  B.A.LL.B. (Hons.) Semester-II
                </Link>
              </li>
              <li className="">
                <Link href="/course-catalogue-b.a.ll.B-hons-semester-3">
                  B.A.LL.B. (Hons.) Semester-III
                </Link>
              </li>
              <li className="">
                <Link href="/course-catalogue-b.a.ll.B-hons-semester-4">
                  B.A.LL.B. (Hons.) Semester-IV
                </Link>
              </li>
              <li className="">
                <Link href="/course-catalogue-b.a.ll.B-hons-semester-5">
                  B.A.LL.B. (Hons.) Semester-V
                </Link>
              </li>
              <li className="">
                <Link href="/course-catalogue-b.a.ll.B-hons-semester-6">
                  B.A.LL.B. (Hons.) Semester-VI
                </Link>
              </li>
              <li className="">
                <Link href="/course-catalogue-b.a.ll.B-hons-semester-7">
                  B.A.LL.B. (Hons.) Semester-VII
                </Link>
              </li>
              <li className="">
                <Link href="/course-catalogue-b.a.ll.B-hons-semester-8">
                  B.A.LL.B. (Hons.) Semester-VIII
                </Link>
              </li>
              <li className="">
                <Link href="/course-catalogue-b.a.ll.B-hons-semester-9">
                  B.A.LL.B. (Hons.) Semester-IX
                </Link>
              </li>
              <li className="">
                <Link href="/course-catalogue-b.a.ll.B-hons-semester-10">
                  B.A.LL.B. (Hons.) Semester-X
                </Link>
              </li>
              <li className="">
                <Link href="/course-catalogue-tentative-optional-papers">
                  Tentative Optional Papers
                </Link>
              </li>
            </ul>
          </li>
          <li className="">
            <h3>P.G. Course</h3>
            <ul>
              <li className="">
                <Link href="/course-llm">
                  LL.M. (Constitutional Law and Corporate Laws)
                </Link>
              </li>
              <li className="">
                <Link href="/m-a-public-policy">M.A. (Public Policy)</Link>
              </li>
            </ul>
          </li>
          <li className="">
            <h3>Executive Programmes (Part Time)</h3>
            <ul>
              <li className="">
                <Link href="/m-a-law-forensic-science-technology">
                  M.A. (Law, Forensic Science and Technology)
                </Link>
              </li>
              <li className="">
                <Link href="/one-year-executive-post-graduate-diploma-in-water-laws-policy-governance">
                  One Year Executive Post Graduate Diploma in Water Laws, Policy
                  and Governance
                </Link>
              </li>
            </ul>
          </li>
          <li className="">
            <h3>Research Programmes</h3>
            <ul>
              <li className="">
                <Link href="#">Ph.D.</Link>
              </li>
              <li className="">
                <Link href="#">LL.D.</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LeftMenu;
