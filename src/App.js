import { Typography, Paper, Stack, Avatar, Divider } from "@mui/material";
function App() {
  return (
    <Stack spacing={1} sx={{ p: 2 }}>
      <img
        src="/spider_web.png"
        style={{
          opacity: 0.075,
          position: "fixed",
          width: "100%",
          height: "100%",
        }}
      />
      <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
        <Avatar
          src="/logo_black.png"
          sx={{
            ".MuiAvatar-img": { objectFit: "fill" },
            width: 50,
            height: 50,
            backgroundColor: "rgb(245, 245, 219)",
          }}
        />
        <Typography variant="h4">In the Web of War</Typography>
      </Stack>
      <Divider
        sx={{
          width: "100%",
          height: "1px",
          backgroundColor: "rgba(245, 245, 219, 0.5)",
        }}
      />
      <Stack direction="row" spacing={1}>
        <Paper sx={{ backgroundColor: "rgba(245, 245, 219, 0.05)", p: 2, width: 300, height: 525 }}>
          <Typography sx={{ textAlign: "center", mb: 2 }} variant="h5">
            Upcoming Singles
          </Typography>
          <Stack
            spacing={1}
          >
            <Stack spacing={1}>
              <Avatar
                src="/logo_black.png"
                sx={{
                  ".MuiAvatar-img": { objectFit: "fill" },
                  width: 70,
                  height: 70,
                  backgroundColor: "red",
                }}
                variant="rounded"
              />
              <Typography variant="h6">Silkentomb</Typography>
            </Stack>
            <Stack spacing={1}>
              <Avatar
                src="/logo_black.png"
                sx={{
                  ".MuiAvatar-img": { objectFit: "fill" },
                  width: 70,
                  height: 70,
                  backgroundColor: "orange",
                }}
                variant="rounded"
              />
              <Typography variant="h6">Broodmother</Typography>
            </Stack>
            <Stack spacing={1}>
              <Avatar
                src="/logo_black.png"
                sx={{
                  ".MuiAvatar-img": { objectFit: "fill" },
                  width: 70,
                  height: 70,
                  backgroundColor: "purple",
                }}
                variant="rounded"
              />
              <Typography variant="h6">Dirge of Ix</Typography>
            </Stack>
            <Stack spacing={1}>
              <Avatar
                src="/logo_black.png"
                sx={{
                  ".MuiAvatar-img": { objectFit: "fill" },
                  width: 70,
                  height: 70,
                  backgroundColor: "yellow",
                }}
                variant="rounded"
              />
              <Typography variant="h6">In the Web of War</Typography>
            </Stack>
          </Stack>
        </Paper>
        <Stack sx={{ width: '100%' }} spacing={1}>
        <Paper sx={{ height: 148, backgroundColor: "rgba(245, 245, 219, 0.1)", p: 2 }}>
          <Typography>
            About
          </Typography>
        </Paper>
        <Paper sx={{ height: 148, backgroundColor: "rgba(245, 245, 219, 0.08)", p: 2 }}>
        <Typography>
            Merch
          </Typography>
        </Paper>
        <Paper sx={{ height: 148, backgroundColor: "rgba(245, 245, 219, 0.1)", p: 2 }}>
        <Typography>
                Social Media
          </Typography>
        </Paper>
        </Stack>
      </Stack>
    </Stack>
  );
}
export default App;
