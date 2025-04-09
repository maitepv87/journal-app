import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";

export const NoteView = () => {
  return (
    <Grid container direction="column" spacing={2} sx={{ padding: 2 }}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={12} sm={6}>
          <Typography fontSize={39} fontWeight="light">
            28 de agosto, 2023
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} container justifyContent="flex-end">
          <Button color="primary" sx={{ padding: 2 }}>
            <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
            Save
          </Button>
        </Grid>
      </Grid>

      <Grid container direction="column" spacing={2}>
        <Grid item>
          <TextField
            type="text"
            variant="filled"
            fullWidth
            placeholder="Enter a title"
            label="Title"
            sx={{ border: "none" }}
          />
        </Grid>

        <Grid item>
          <TextField
            type="text"
            variant="filled"
            fullWidth
            multiline
            placeholder="What happened today?"
            minRows={5}
          />
        </Grid>
      </Grid>

      {/* Image gallery */}
      <Grid item>
        <ImageGallery />
      </Grid>
    </Grid>
  );
};
