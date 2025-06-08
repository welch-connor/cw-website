'use client';

import { Card, CardTitle } from '@/src/components/ui/Card';
import { Section } from '@/src/components/ui/Section';
import { skillGroups } from '@/src/data/skills';

export function Skills() {
  return (
    <Section 
      id="skills" 
      title="Technical areas of expertise"
      description=""
      className="bg-light"
    >
      <div className="row g-4">
        {skillGroups.map((group, index) => (
          <div key={index} className="col-md-6 col-lg-3">
            <Card hoverable>
              <CardTitle>{group.title}</CardTitle>
              <ul className="list-unstyled mb-0">
                {group.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="mb-2">
                    <span className="d-flex align-items-center">
                      <span className="text-primary me-2">•</span>
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}
