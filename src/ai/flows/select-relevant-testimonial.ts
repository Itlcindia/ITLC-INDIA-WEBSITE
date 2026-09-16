'use server';

/**
 * @fileOverview Selects a relevant testimonial based on the service of interest.
 *
 * - selectRelevantTestimonial - A function that selects a relevant testimonial.
 * - SelectRelevantTestimonialInput - The input type for the selectRelevantTestimonial function.
 * - SelectRelevantTestimonialOutput - The return type for the selectRelevantTestimonial function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SelectRelevantTestimonialInputSchema = z.object({
  serviceOfInterest: z
    .string()
    .describe('The service the user is interested in (e.g., SaaS, Custom Development, Digital Marketing).'),
  testimonials: z
    .array(z.string())
    .describe('An array of client testimonials to choose from.'),
});
export type SelectRelevantTestimonialInput = z.infer<
  typeof SelectRelevantTestimonialInputSchema
>;

const SelectRelevantTestimonialOutputSchema = z.object({
  relevantTestimonial: z
    .string()
    .describe('The testimonial most relevant to the service of interest.'),
});
export type SelectRelevantTestimonialOutput = z.infer<
  typeof SelectRelevantTestimonialOutputSchema
>;

export async function selectRelevantTestimonial(
  input: SelectRelevantTestimonialInput
): Promise<SelectRelevantTestimonialOutput> {
  return selectRelevantTestimonialFlow(input);
}

const prompt = ai.definePrompt({
  name: 'selectRelevantTestimonialPrompt',
  input: {schema: SelectRelevantTestimonialInputSchema},
  output: {schema: SelectRelevantTestimonialOutputSchema},
  prompt: `Given the service of interest: {{{serviceOfInterest}}}, and the following testimonials:

  {{#each testimonials}}
  - {{{this}}}
  {{/each}}

  Select the testimonial that is most relevant to the service of interest. Return ONLY the testimonial.
  `,
});

const selectRelevantTestimonialFlow = ai.defineFlow(
  {
    name: 'selectRelevantTestimonialFlow',
    inputSchema: SelectRelevantTestimonialInputSchema,
    outputSchema: SelectRelevantTestimonialOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
