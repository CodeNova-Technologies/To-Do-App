import React from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Stack,
  Chip,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneAllIcon from "@mui/icons-material/DoneAll";

const CompletedTaskItem = ({ task }) => {
  // Simulate delete with alert (for UI preview only)
  const handleDelete = () => {
    alert(`Pretend to delete task ID ${task.id}`);
  };

  return (
    <Card
      variant="outlined"
      sx={{
        mb: 2,
        backgroundColor: "#f5f5f5",
        borderLeft: "5px solid #4caf50",
        boxShadow: 1,
        ":hover": {
          boxShadow: 3,
        },
      }}
    >
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Stack direction="row" spacing={2} alignItems="center">
            <DoneAllIcon color="success" />
            <Typography variant="h6">{task.text}</Typography>
            <Chip
              label={`Completed at: ${new Date(task.completedAt).toLocaleString()}`}
              size="small"
              color="success"
              variant="outlined"
            />
          </Stack>

          <IconButton
            edge="end"
            aria-label="delete"
            onClick={handleDelete}
            color="error"
          >
            <DeleteIcon />
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CompletedTaskItem;