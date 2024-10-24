import { Tag } from '@/components/ui/Tag';
import { PRICING_CONSTANTS } from '@/constants/pricing';

export default function TechnologyTags() {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-8">
      <Tag label="DESKTOP DESIGN" variant="primary" />
      <Tag label="MOBILE DESIGN" variant="secondary" />
      
      <div className="w-full flex justify-center gap-3 mt-4">
        <Tag label={PRICING_CONSTANTS.TAGS.STATUS} variant="primary" />
        {PRICING_CONSTANTS.TAGS.TECHNOLOGIES.map((tech) => (
          <Tag key={tech} label={tech} variant="technology" />
        ))}
        <Tag label={PRICING_CONSTANTS.TAGS.DIFFICULTY} variant="difficulty" />
      </div>
    </div>
  );
}