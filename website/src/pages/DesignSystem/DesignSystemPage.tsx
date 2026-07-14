import AppLayout from "@/layouts/AppLayout";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import Typography from "@/components/foundations/Typography";
import Colors from "@/components/foundations/Colors";
import Spacing from "@/components/foundations/Spacing";
import Shadows from "@/components/foundations/Shadows";
import Radius from "@/components/foundations/Radius";
import Icons from "@/components/foundations/Icons";

export default function DesignSystemPage() {
  return (
    <AppLayout>
      <Container>
        <Section>
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Foundations
            </span>

            <h1 className="text-5xl font-bold tracking-tight">
              Design System
            </h1>

            <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
              A living design system for the AI Engineering Handbook.
              Every color, typography style, layout primitive, and reusable
              component is documented here before being used throughout the
              platform.
            </p>
          </div>
        </Section>

        <Section>
          <div id="typography" className="scroll-mt-24">
            <Typography />
          </div>
        </Section>

        <Section>
          <div id="colors" className="scroll-mt-24">
            <Colors />
          </div>
        </Section>

        <Section>
          <div id="spacing" className="scroll-mt-24">
            <Spacing />
          </div>
        </Section>

        <Section>
          <div id="shadows" className="scroll-mt-24">
            <Shadows />
          </div>
        </Section>

        <Section>
          <div id="radius" className="scroll-mt-24">
            <Radius />
          </div>
        </Section>

        <Section>
          <div id="icons" className="scroll-mt-24">
            <Icons />
          </div>
        </Section>
      </Container>
    </AppLayout>
  );
}