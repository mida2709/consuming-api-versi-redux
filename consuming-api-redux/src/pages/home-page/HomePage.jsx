import { Grid } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import { logoutAction } from '../../redux/actions/authActions';
import { PostForm } from "../../components/PostForm";
import { Feed } from "../../components/Feed";

export const HomePage = () => {
  const credentials = useSelector((state) => state.auth.credentials);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    !credentials && navigate('/login');
  }, [credentials, navigate]);

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <div>
      <div style={{ maxWidth: 1080, margin: 'auto' }}>
        <Grid container spacing={1}>
          <Grid item md={3} lg={3}></Grid>
          <Grid item md={3} lg={9}>
            <h4>Feeds</h4>
            <button onClick={handleLogout}>Logout</button> {/* Tambahkan tombol Logout */}
          </Grid>
        </Grid>

        <Grid container spacing={1}>
          <Grid item md={3} lg={3}>
            <PostForm />
          </Grid>
          <Grid item md={3} lg={3}>
            <Feed />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
