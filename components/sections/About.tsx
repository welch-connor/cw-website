'use client';

import { Card, CardTitle } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';

export function About() {
  const domains = [
    {
      title: 'Business & Tech Strategy',
      description: 'I advise the technology future for businesses, translating strategic vision into technical roadmaps, guiding teams to successful execution, and supporting adoption of new solutions.'
    },
    {
      title: 'App Development',
      description: 'I cultivate high-performing teams to deliver high-quality, scalable solutions using agile practices and cloud-native architectures - and roll up my sleeves when needed.'
    }
  ];

  return (
    <Section id="about" title="About Me">
      <div className="row justify-content-center">
        <div className="col-lg-10 text-center">
          <p className="lead mb-5">
            An engineer-turned-management-consultant with a knack to `connect the dots` for complex tech transformations within large organizations; 
            bolstered with the technical know-how to `see around the corner` and deliver with quality.
          </p>
          
          <div className="row g-4">
            {domains.map((item, index) => (
              <div key={index} className="col-md-6">
                <Card hoverable className="h-100">
                  <CardTitle as="h3" className="text-primary">{item.title}</CardTitle>
                  <p className="mb-0">{item.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
