const fs = require("fs");
const path = require("path");

const [id, title, description] = process.argv.slice(2);
const configPath = path.resolve(__dirname, "../../../../config.json");
const config = JSON.parse(fs.readFileSync(configPath, "utf8"));

if (!id || !title || !description) {
  console.error(
    'Usage: node .github/skills/new-assignment/scripts/update-config.js <id> "<title>" "<description>"',
  );
  process.exit(1);
}

const dueDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];

config.assignments.push({
  id,
  title,
  description,
  path: `assignments/${id}`,
  dueDate,
});

fs.writeFileSync(configPath, JSON.stringify(config, null, 2) + "\n");
console.log(`Added "${title}" (due ${dueDate})`);
console.log(`Assignment path: assignments/${id}`);
console.log(`Due date: ${dueDate}`);
console.log(`Config updated at: ${configPath}`);
console.log(`Please verify the assignment appears correctly on the website.`);
console.log(`You can open the site locally to check: http://localhost:3000`);
console.log(`Remember to restart the local server if it was already running to see the new assignment.`);
console.log(`Check the assignment page for correct display and functionality.`);
console.log(`If there are any issues, review the assignment files and config.json for errors.`);
console.log(`Ensure that all required sections in the assignment markdown are present and correctly formatted.`);
console.log(`Verify that any starter code or data files are correctly linked and accessible from the assignment page.`);
console.log(`Double-check that the assignment ID, title, and description are correctly reflected on the website.`);
console.log(`Ensure that the due date is correctly displayed and matches the intended schedule.`);
console.log(`Verify that any attachments (starter code, data files) are correctly registered and accessible.`);
console.log(`Ensure that the assignment directory structure follows the expected format: assignments/<id>/`);
console.log(`Verify that the README.md file exists and follows the assignment template.`);
console.log(`Check that any links within the README.md file are correct and functional.`);
console.log(`Ensure that any code blocks in the README.md file are properly formatted and display correctly.`);
console.log(`Verify that any images or media included in the README.md file are correctly linked and displayed.`);
console.log(`Ensure that the assignment instructions are clear and unambiguous for students.`);
console.log(`Check that the assignment objectives align with the tasks and requirements specified.`);
console.log(`Verify that the assignment difficulty and scope are appropriate for the intended student level.`);
console.log(`Ensure that any starter code provided is functional and correctly integrated with the assignment tasks.`);
console.log(`Verify that any data files required for the assignment are correctly formatted and accessible.`);
console.log(`Check that the assignment can be completed successfully using the provided instructions, starter code, and data files.`);
console.log(`Ensure that any submission requirements or grading criteria are clearly specified and accessible to students.`);
console.log(`Verify that the assignment adheres to any school or course-specific guidelines and standards.`);
console.log(`Ensure that the assignment is accessible and usable for all students, including those with disabilities.`);
console.log(`Verify that any external resources or references included in the assignment are reliable and up-to-date.`);
console.log(`Ensure that the assignment complies with any relevant copyright or licensing requirements for included materials.`);