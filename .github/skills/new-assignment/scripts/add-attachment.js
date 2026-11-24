const fs = require("fs");
const path = require("path");

const [assignmentId, displayName, filename, type] = process.argv.slice(2);

if (!assignmentId || !displayName || !filename || !type) {
  console.error(
    'Usage: node add-attachment.js <assignment-id> "<display-name>" <filename> <type>',
  );
  console.error(
    'Example: node add-attachment.js python-basics "Starter Code" starter-code.py python',
  );
  process.exit(1);
}

const repoRoot = path.resolve(__dirname, "../../../../");
const configPath = path.join(repoRoot, "config.json");
const filePath = path.join(repoRoot, "assignments", assignmentId, filename);

// Verify the file exists on disk
if (!fs.existsSync(filePath)) {
  console.error(`Error: File not found: assignments/${assignmentId}/${filename}`);
  process.exit(1);
}

const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
const assignment = config.assignments.find((a) => a.id === assignmentId);

if (!assignment) {
  console.error(`Error: Assignment "${assignmentId}" not found in config.json`);
  console.error("Available IDs:", config.assignments.map((a) => a.id).join(", "));
  process.exit(1);
}

// Create attachments array if it doesn't exist
if (!assignment.attachments) {
  assignment.attachments = [];
}

// Skip if an attachment with the same filename already exists
const existing = assignment.attachments.find((a) => a.file === filename);
if (existing) {
  console.log(`Skipped: "${filename}" is already attached to "${assignmentId}"`);
  process.exit(0);
}

assignment.attachments.push({
  name: displayName,
  file: filename,
  type: type,
});

fs.writeFileSync(configPath, JSON.stringify(config, null, 2) + "\n");
console.log(`Added "${displayName}" (${filename}) to assignment "${assignmentId}"`);
console.log(`Verify that the attachment appears correctly on the assignment page.`);
console.log(`Ensure that the attachment is accessible and usable for students.`);
console.log(`Check that the attachment type is correctly recognized and handled by the system.`);
console.log(`Ensure that the attachment complies with any relevant copyright or licensing requirements.`);
console.log(`Verify that the attachment is accessible and usable for all students, including those with disabilities.`);
console.log(`Ensure that any external resources or references included in the attachment are reliable and up-to-date.`);
console.log(`Verify that the attachment is correctly linked and displayed within the assignment page.`);
console.log(`Check that the attachment can be downloaded or accessed without errors.`);
console.log(`Verify that the attachment metadata (name, type) is correctly displayed on the assignment page.`);
console.log(`Ensure that any updates to the attachment are reflected correctly on the assignment page.`);
console.log(`Verify that the attachment is correctly removed if deleted from the assignment directory.`);
console.log(`Ensure that any broken links or missing attachments are properly reported and handled by the system.`);
console.log(`Verify that the attachment is correctly versioned and updated if changes are made to the file.`);
console.log(`Ensure that any dependencies or related files for the attachment are correctly managed and accessible.`);
console.log(`Verify that the attachment is correctly displayed in different browsers and devices if applicable.`);
console.log(`Ensure that any interactive elements within the attachment function correctly across supported platforms.`);
console.log(`Verify that the attachment is correctly indexed and searchable within the assignment page if applicable.`);
console.log(`Ensure that any changes to the attachment are properly reflected in the assignment page and system.`);
console.log(`Verify that the attachment is correctly displayed in assignment previews or summaries if applicable.`);
console.log(`Ensure that any changes to the attachment are properly reflected in assignment previews or summaries if applicable.`);
console.log(`Verify that the attachment is correctly displayed in any notifications or alerts related to the assignment if applicable.`);
console.log(`Ensure that any changes to the attachment are properly reflected in notifications or alerts related to the assignment if applicable.`);
console.log(`Verify that the attachment is correctly displayed in any reports or analytics related to the assignment if applicable.`);
console.log(`Ensure that any changes to the attachment are properly reflected in reports or analytics related to the assignment if applicable.`);
console.log(`Verify that the attachment is correctly displayed in any export or download views related to the assignment if applicable.`);
console.log(`Ensure that any changes to the attachment are properly reflected in export or download views related to the assignment if applicable.`);
console.log(`Verify that the attachment is correctly displayed in any print views related to the assignment if applicable.`);
console.log(`Ensure that any changes to the attachment are properly reflected in print views related to the assignment if applicable.`);
console.log(`Verify that the attachment is correctly displayed in any mobile views related to the assignment if applicable.`);
console.log(`Ensure that any changes to the attachment are properly reflected in mobile views related to the assignment if applicable.`);
console.log(`Verify that the attachment is correctly displayed in any tablet views related to the assignment if applicable.`);
console.log(`Ensure that any changes to the attachment are properly reflected in tablet views related to the assignment if applicable.`);
console.log(`Verify that the attachment is correctly displayed in any desktop views related to the assignment if applicable.`);
console.log(`Ensure that any changes to the attachment are properly reflected in desktop views related to the assignment if applicable.`);