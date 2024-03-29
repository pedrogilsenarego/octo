import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Divider,
  useTheme,
  useMediaQuery,
  Grid,
  Box,
} from "@mui/material";
import { Actions } from "./types";
import Button from "./ButtonPopup";
import { Colors } from "../../constants/pallete";
import { useRef } from "react";
import { AiFillCloseSquare } from "react-icons/ai";

interface Props {
  children: JSX.Element;
  title?: string;
  openPopup: boolean;
  setOpenPopup?: (openPopup: boolean) => void;
  actions?: Actions[];
  onClose?: () => void;
  fullScreen?: boolean;
  closeButton?: boolean
}

const Popup = ({
  title,
  children,
  openPopup,
  setOpenPopup,
  actions,
  onClose,
  fullScreen,
  closeButton
}: Props) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  const contentRef = useRef<HTMLDivElement>(null);

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div>
      <Dialog
        open={openPopup}
        style={{ color: "white" }}
        PaperProps={{
          style: {
            backgroundColor: "#e4e4e4",
            minWidth: mobile ? "90vw" : "80vw",
            minHeight: mobile ? "auto" : "89vh",
          },
        }}
        onClose={onClose}
      >
        {title && (
          <DialogTitle>
            <div style={{ textAlign: "center", display: "flex", justifyContent: "center" }}>
              <Typography
                component='div'
                style={{
                  fontSize: "28px",
                  color: Colors.SOFT_TAUPE,
                  fontWeight: 700,
                  letterSpacing: "3px",
                }}
                dangerouslySetInnerHTML={{ __html: title }}
              >

              </Typography>
              {closeButton && (
                <AiFillCloseSquare
                  onClick={onClose}
                  className='icon'
                  size='3rem'
                  color={Colors.BLACKISH}
                  style={{ cursor: "pointer" }}
                />
              )}
            </div>
          </DialogTitle>
        )}
        <DialogContent
          dividers
          style={{
            color: "white",
            scrollbarWidth: "none",
          }}
        >
          <Box
            ref={contentRef}
            onWheel={handleWheel}
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            {children}
          </Box>
          {actions && (
            <>
              <Divider
                style={{
                  width: "100%",
                  background: "#ffffff66",
                  marginTop: "10px",
                }}
              />
              <Grid
                container
                justifyContent='flex-end'
                style={{ marginTop: "10px" }}
              >
                {actions?.map((item, pos) => {
                  return (
                    <Button
                      disabled={item.disabled}
                      title={item.title}
                      key={pos}
                      onClick={item.onClick}
                    />
                  );
                })}
              </Grid>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Popup;
