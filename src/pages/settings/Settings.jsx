import { Container, Typography, Divider } from "@mui/material";
import Box from "@mui/material/Box";
import SettingsTable from "../../components/settingsTable/SettingsTable";

export default function Settings() {
  return (
    <Container>
      <Typography
        variant="h6"
        noWrap
        component="h6"
        sx={{ color: "black", mb: 2, fontWeight: "bold", borderBottom: "" }}
      >
        General Account Settings
      </Typography>
      <Divider />
      <Box sx={{ mt: 4, p: 0 }}>
        <SettingsTable />
      </Box>
      {/* <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item xs={2}>
            <Item sx={{ textAlign: "end", pl: 3, pr: 2 }} elevation={0}>
              <Avatar
                src="https://i.pinimg.com/originals/26/f6/c7/26f6c76e2de3b80c38d6545d09f2b9c5.jpg"
                sx={{ width: 54, height: 54, ml: "auto" }}
              />
              <Typography variant="body1" sx={{ mt: 3, fontWeight: "600" }}>
                Bio
              </Typography>
              <Typography variant="body1" sx={{ mt: 8, fontWeight: "600" }}>
                Gender
              </Typography>
              <Typography variant="body1" sx={{ mt: 5, fontWeight: "600" }}>
                Show account suggestions on profiles
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={10}>
            <Item sx={{ pl: 2, pt: 1 }} elevation={0}>
              <Typography sx={{ color: "black", fontWeight: "500" }}>
                iam_shoaibmemon
              </Typography>
              <Typography>
                <Link style={{ textDecoration: "none", color: "primary" }}>
                  Change profile photo
                </Link>
              </Typography>
              <TextField
                size="small"
                sx={{ mt: 4, width: 350 }}
                id="outlined-basic"
                variant="outlined"
                autoComplete="off"
              />
              <Box>
                <TextField
                  size="small"
                  sx={{ mt: 4, width: 350, color: "black" }}
                  id="outlined-basic"
                  variant="outlined"
                  autoComplete="off"
                  helperText="This won’t be part of your public profile."
                />
              </Box>
              <Box sx={{ width: 400 }}>
                <FormGroup sx={{ mt: 2 }}>
                  <FormControlLabel
                    control={<Checkbox defaultChecked size="small" />}
                    label="Choose whether people can see similar account suggestions on your profile, and whether your account can be suggested on other profiles."
                  />
                </FormGroup>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Box> */}
    </Container>
  );
}
