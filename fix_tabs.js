const fs = require('fs');

let code = fs.readFileSync('artifacts/pwv-dashboard/src/pages/Dashboard.tsx', 'utf-8');

// Identify sections by comments
const kpiStart = code.indexOf('{/* KPI Row */}');
const chartsStart = code.indexOf('{/* Charts Row 1 */}');
const keyFindingsStart = code.indexOf('{/* Key Findings Section */}');
const customerStart = code.indexOf('{/* Customer Portfolio Section */}');
const caseStudiesStart = code.indexOf('{/* Caliber Car Wash Section */}');
const industryStart = code.indexOf('{/* Savings by Industry Section */}');
const enterpriseStart = code.indexOf('{/* Enterprise Deployments Section */}');
const endMarker = code.lastIndexOf('      </div>\n    </div>');

const sections = {
  kpi: code.substring(kpiStart, chartsStart),
  charts: code.substring(chartsStart, keyFindingsStart),
  keyFindings: code.substring(keyFindingsStart, customerStart),
  customer: code.substring(customerStart, caseStudiesStart),
  caseStudies: code.substring(caseStudiesStart, industryStart),
  industry: code.substring(industryStart, enterpriseStart),
  enterprise: code.substring(enterpriseStart, endMarker),
};

const prefix = code.substring(0, code.indexOf('<TabsContent value="overview" className="mt-0 outline-none">'));
const suffix = `        </Tabs>\n      </div>\n    </div>\n  );\n}\n`;

const cleanTabsContent = (str) => {
  return str.replace(/<TabsContent[^>]*>/g, '').replace(/<\/TabsContent>/g, '');
};

const newCode = prefix + 
  `        <TabsContent value="overview" className="mt-0 outline-none">\n` + 
  cleanTabsContent(sections.kpi) + 
  cleanTabsContent(sections.keyFindings) + 
  `        </TabsContent>\n\n` + 
  `        <TabsContent value="proof-data" className="mt-0 outline-none">\n` + 
  cleanTabsContent(sections.charts) + 
  `        </TabsContent>\n\n` + 
  `        <TabsContent value="case-studies" className="mt-0 outline-none">\n` + 
  cleanTabsContent(sections.caseStudies) + 
  `        </TabsContent>\n\n` + 
  `        <TabsContent value="client-portfolio" className="mt-0 outline-none">\n` + 
  cleanTabsContent(sections.customer) + 
  cleanTabsContent(sections.industry) + 
  cleanTabsContent(sections.enterprise) + 
  `        </TabsContent>\n` + 
  suffix;

fs.writeFileSync('artifacts/pwv-dashboard/src/pages/Dashboard.tsx', newCode);
console.log("Rewrite completed");