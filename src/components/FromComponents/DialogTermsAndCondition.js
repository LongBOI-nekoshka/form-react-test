import { Button, Dialog, DialogActions, DialogContent, Typography } from "@mui/material";

const DialogTermsAndCondition = (props) => {
  const {
    open,
    setOpen
  } = props
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
    >
      <DialogContent>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempus blandit ligula eu imperdiet. Aenean ligula nibh, ultricies vitae orci facilisis, convallis lacinia purus. Etiam aliquam malesuada dolor, eu gravida tortor facilisis ac. Etiam dictum quis orci non rhoncus. Donec facilisis orci id gravida lacinia. Morbi eget dictum lectus. Integer mollis, risus et tempus varius, odio dui fringilla nulla, a maximus lacus felis eget velit. Maecenas lacinia aliquam dignissim. Fusce in arcu et arcu interdum interdum. Sed sapien purus, faucibus id blandit a, semper id nisl.

            Fusce malesuada mi nibh, eget varius felis bibendum at. Suspendisse pretium laoreet mauris, ut euismod tellus pharetra in. In eu sem consectetur, finibus metus eget, laoreet libero. Donec a nunc convallis, venenatis lacus non, facilisis ex. Aenean in porta neque. Proin ut arcu facilisis tortor feugiat laoreet. Aliquam in magna ut est maximus tristique ac ac leo. Aliquam tristique diam eu erat tincidunt pretium. Duis sodales lacinia dui at commodo. Morbi faucibus ex sit amet quam volutpat aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur commodo eget sapien vel malesuada. Pellentesque sit amet leo velit. Donec ut mi porttitor, luctus ligula quis, dapibus dui. Suspendisse potenti. Fusce enim lacus, eleifend vel tellus dapibus, venenatis ultricies risus.

            Praesent eu nunc non ante vulputate efficitur a sed ligula. Vestibulum eu augue id purus malesuada iaculis. Cras non nunc consequat, dignissim odio id, venenatis felis. Mauris tellus est, porttitor ultricies arcu nec, scelerisque eleifend risus. Nam consectetur lobortis mi id posuere. Sed id eros odio. Praesent placerat nibh sed velit vestibulum, vitae auctor elit viverra. Etiam egestas nunc quis consequat ullamcorper. Vivamus vel ante id dui euismod auctor. Sed iaculis euismod felis vitae ullamcorper. Vivamus sit amet risus ut lacus fermentum scelerisque id ac tortor. Maecenas egestas vel tellus sit amet sagittis. Morbi congue lectus vel fermentum fringilla. Phasellus viverra congue est non viverra. Morbi eget gravida diam.

            Suspendisse nec aliquam ante, in mollis sapien. Suspendisse commodo ipsum nec diam blandit, a rhoncus nisi viverra. In at justo ut elit elementum mattis in fringilla leo. Cras consequat, ante nec tristique feugiat, libero erat faucibus ante, ac tempus odio augue et nulla. In faucibus magna non arcu egestas, nec faucibus urna fermentum. Quisque nec magna mauris. Duis fermentum, dui non imperdiet gravida, dui ligula accumsan eros, a varius felis augue id lacus. Cras auctor volutpat bibendum. Aliquam at odio at mi laoreet pellentesque. Praesent vel ligula vel diam posuere condimentum. Nunc venenatis lorem eget eleifend faucibus. Suspendisse lobortis felis quis consectetur blandit. In a sollicitudin sapien. Integer egestas sodales nisi, sed pulvinar nisi ornare eget. Nullam eu pulvinar elit.

            Nulla facilisi. Donec luctus scelerisque nibh, vitae varius dui faucibus ac. Pellentesque fringilla fringilla gravida. Pellentesque non tortor faucibus, mollis justo eu, mattis libero. Curabitur eget lobortis massa. Pellentesque quis ante pretium, bibendum magna et, elementum dui. Vestibulum vulputate orci lobortis nulla volutpat, ac commodo massa finibus. Proin at magna turpis. Donec dictum nulla eu lacus rutrum posuere. Phasellus bibendum efficitur tellus, vel volutpat nunc ullamcorper a. Etiam rutrum dui at dignissim laoreet.
            
            I will eat moms spaghetti after making a purchase but there will vomit on my sweater already and my cat look calm and steady.
          </Typography>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={() => setOpen(false)}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogTermsAndCondition;