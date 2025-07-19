import React from "react";
import {
  Container,
  Typography,
  Divider,
  Box,
  List,
} from "@mui/material";
import CompletedTaskItem from "./CompletedTaskItem";

// Dummy data for UI preview
const dummyCompletedTasks = [
  {
    id: 1,
    text: "Finish ReactJS UI",
    completedAt: new Date("2025-07-17T10:00:00"),
  },
  {
    id: 2,
    text: "Review pull requests",
    completedAt: new Date("2025-07-18T15:30:00"),
  },
  {
    id: 3,
    text: "Send final project report",
    completedAt: new Date("2025-07-19T09:15:00"),
  },
];

const CompletedTasksPage = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Completed Tasks
      </Typography>

      <Divider sx={{ mb: 2 }} />

      {dummyCompletedTasks.length === 0 ? (
        <Typography variant="body1" sx={{ mt: 4, color: "text.secondary" }}>
          No completed tasks yet.
        </Typography>
      ) : (
        <Box>
          <List disablePadding>
            {dummyCompletedTasks.map((task) => (
              <CompletedTaskItem key={task.id} task={task} />
            ))}
          </List>
        </Box>
      )}
    </Container>
  );
};

export default CompletedTasksPage;