import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Stack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCallback } from "react";

export const MenuDrawer = (props) => {
  const { isOpen, onClose } = props;
  const router = useRouter();

  const onClickHomeBtn = useCallback(() => router.push("/"), [router]);
  const onClickSentoBtn = useCallback(
    () => router.push("/links/SentoPage"),
    [router]
  );
  const onClickSaunaBtn = useCallback(
    () => router.push("/links/SaunaPage"),
    [router]
  );
  const onClickSuperBtn = useCallback(
    () => router.push("/links/SuperSentoPage"),
    [router]
  );
  const onClickNearBtn = useCallback(
    () => router.push("/links/NearSentoPage"),
    [router]
  );
  const onClickGuideBtn = useCallback(
    () => router.push("/links/GuidePage"),
    [router]
  );

  return (
    <>
      <Drawer placement="right" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody>
              <Stack>
                <Button
                  onClick={onClickHomeBtn}
                  _focus={{ outline: "none" }}
                  w="100%"
                >
                  Home
                </Button>
                <Button
                  onClick={onClickSentoBtn}
                  _focus={{ outline: "none" }}
                  w="100%"
                >
                  銭湯
                </Button>
                <Button
                  onClick={onClickSaunaBtn}
                  _focus={{ outline: "none" }}
                  w="100%"
                >
                  サウナ
                </Button>
                <Button
                  onClick={onClickSuperBtn}
                  _focus={{ outline: "none" }}
                  w="100%"
                >
                  スーパー銭湯
                </Button>
                <Button
                  onClick={onClickNearBtn}
                  _focus={{ outline: "none" }}
                  w="100%"
                >
                  近くの銭湯
                </Button>
                <Button
                  onClick={onClickGuideBtn}
                  _focus={{ outline: "none" }}
                  w="100%"
                >
                  ガイド
                </Button>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
