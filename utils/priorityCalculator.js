const calculatePriorityPoints = (priority) => {
    if (priority === "critical") return 5;
    if (priority === "high") return 3;
    if (priority === "medium") return 2;
    if (priority === "low") return 1;

    return 0;
};

module.exports = calculatePriorityPoints;