{
  description = "Startup with Markup";

  inputs = {
    devenv.url = "github:cachix/devenv";
    flake-utils.url = "github:numtide/flake-utils";
    nixpkgs.url = "github:NixOS/nixpkgs";
  };

  outputs = { self, flake-utils, nixpkgs, devenv }@inputs:
    flake-utils.lib.eachDefaultSystem (system:
      let
        overlays = [
          (self: super: rec {
            nodejs = super.nodejs-18_x;
            pnpm = super.nodePackages.pnpm;
            yarn = (super.yarn.override { inherit nodejs; });
          })
        ];
        pkgs = import nixpkgs { inherit overlays system; };
      in {
        devShells.default = devenv.lib.mkShell {
          inherit inputs pkgs;
          modules = [
            ({ pkgs, ... }: {
              env = { ASTRO_SITE = "http://localhost:3000"; };

              packages = with pkgs; [
                git
                htmlq
                libxml2
                nodejs
                pnpm
                zsh

                # Sharp dependencies
                vips
                libavif
                libjpeg
                libpng
                libwebp
              ];

              processes.astro.exec = "pnpm dev";
            })
          ];
        };
      });
}
