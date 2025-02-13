function generateACC() {
    const userStory = document.getElementById('userStory').value.trim();
    if (userStory === "") {
        alert("Please enter a user story.");
        return;
    }

    // Split user story into lines
    const lines = userStory.split("\n");
    let role = "";
    let goal = "";
    let benefit = "";
    let requirements = [];

    // Extract key parts
    lines.forEach(line => {
        const lowerLine = line.toLowerCase();

        if (lowerLine.startsWith("as a")) {
            role = line.replace(/^As a/i, "").trim();
        } else if (lowerLine.startsWith("i want to")) {
            goal = line.replace(/^I WANT TO/i, "").trim();
        } else if (lowerLine.startsWith("so i can")) {
            benefit = line.replace(/^SO I CAN/i, "").trim();
        } else if (line.startsWith("-")) {
            requirements.push(line.replace("-", "").trim());
        }
    });

    // Handle missing user story parts
    if (!role) role = "the user";
    if (!goal) goal = "perform an action";
    if (!benefit) benefit = "achieve the expected outcome";

    // Construct ACC with improved wording
    let acc = `Scenario: ${goal.charAt(0).toUpperCase() + goal.slice(1)}\n`;
    acc += `Given ${role} is in the system and meets necessary preconditions\n`;
    acc += `When ${role} attempts to ${goal}\n`;
    acc += `Then ${benefit}\n`;

    if (requirements.length > 0) {
        acc += `\nAcceptance Criteria:\n`;
        requirements.forEach((req, index) => {
            acc += `${index + 1}. ${req}\n`;
        });
    }

    document.getElementById('accOutput').value = acc;
}
