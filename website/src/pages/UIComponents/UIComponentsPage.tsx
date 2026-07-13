import DocsLayout from "@/layouts/DocsLayout";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import ShowcaseSection from "@/components/documentation/ShowcaseSection";
import ComponentPreview from "@/components/documentation/ComponentPreview";
import ComponentExample from "@/components/documentation/ComponentExample";
import ComponentCode from "@/components/documentation/ComponentCode";
import ComponentProps from "@/components/documentation/ComponentProps";

import ButtonExamples from "@/components/ui/Button/Button.examples";
import BadgeExamples from "@/components/ui/Badge/Badge.examples";
import InputExamples from "@/components/ui/Input/Input.examples";
import CardExamples from "@/components/ui/Card/Card.examples";
import AlertExamples from "@/components/ui/Alert/Alert.examples";
import AvatarExamples from "@/components/ui/Avatar/Avatar.examples";

export default function UIComponentsPage() {
  return (
    <DocsLayout>
      <Container>
        <Section>
          <div className="space-y-4">
            <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">
              Components
            </span>

            <h1 className="text-5xl font-bold tracking-tight text-slate-900">
              UI Components
            </h1>

            <p className="max-w-3xl text-lg text-slate-600">
              Reusable UI components that power the AI Engineering Handbook.
            </p>
          </div>
        </Section>

        <ShowcaseSection
          id="button"
          title="Button"
          description="Buttons trigger actions throughout the application."
        >
          <ComponentPreview>
            <ButtonExamples />
          </ComponentPreview>

          <ComponentExample title="Usage">
            <ComponentCode code={`<Button>Primary</Button>`} />
          </ComponentExample>

          <ComponentProps
            props={[
              {
                name: "variant",
                type: "primary | secondary | outline | ghost | link | icon",
                defaultValue: "primary",
                description: "Button style variant",
              },
              {
                name: "size",
                type: "sm | md | lg",
                defaultValue: "md",
                description: "Button size",
              },
            ]}
          />
        </ShowcaseSection>

        <ShowcaseSection
          id="badge"
          title="Badge"
          description="Badges display status, labels, or categories."
        >
          <ComponentPreview>
            <BadgeExamples />
          </ComponentPreview>
        </ShowcaseSection>

        <ShowcaseSection
          id="input"
          title="Input"
          description="Collect user input."
        >
          <ComponentPreview>
            <InputExamples />
          </ComponentPreview>
        </ShowcaseSection>

        <ShowcaseSection
          id="card"
          title="Card"
          description="Composable content container."
        >
          <ComponentPreview>
            <CardExamples />
          </ComponentPreview>
        </ShowcaseSection>

        <ShowcaseSection
          id="alert"
          title="Alert"
          description="Displays contextual feedback."
        >
          <ComponentPreview>
            <AlertExamples />
          </ComponentPreview>
        </ShowcaseSection>

        <ShowcaseSection
          id="avatar"
          title="Avatar"
          description="Displays user profile images."
        >
          <ComponentPreview>
            <AvatarExamples />
          </ComponentPreview>
        </ShowcaseSection>
      </Container>
    </DocsLayout>
  );
}