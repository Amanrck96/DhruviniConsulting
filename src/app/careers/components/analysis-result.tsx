import type { ResumeAnalysisOutput } from '@/ai/flows/resume-analysis-and-categorization';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BrainCircuit, Briefcase, Star, CheckCircle } from 'lucide-react';

interface AnalysisResultProps {
  analysis: ResumeAnalysisOutput;
}

export default function AnalysisResult({ analysis }: AnalysisResultProps) {
  return (
    <div>
        <h2 className="text-3xl font-headline font-semibold mb-8 text-center text-primary">Resume Analysis Complete</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                    <BrainCircuit className="h-8 w-8 text-primary" />
                    <CardTitle className="font-headline text-2xl">Extracted Skills</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-2">
                        {analysis.skills.map((skill) => (
                            <Badge key={skill} variant="secondary">{skill}</Badge>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                    <Briefcase className="h-8 w-8 text-primary" />
                    <CardTitle className="font-headline text-2xl">Experience Summary</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{analysis.experience}</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                    <Star className="h-8 w-8 text-primary" />
                    <CardTitle className="font-headline text-2xl">Key Qualifications</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{analysis.qualifications}</p>
                </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary">
                <CardHeader className="flex flex-row items-center gap-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                    <CardTitle className="font-headline text-2xl text-primary">Suggested Positions</CardTitle>
                </CardHeader>
                <CardContent>
                    {analysis.suggestedPositions.length > 0 ? (
                        <ul className="space-y-2">
                        {analysis.suggestedPositions.map((position) => (
                            <li key={position} className="font-semibold text-foreground">
                                {position}
                            </li>
                        ))}
                    </ul>
                    ) : (
                        <p className="text-muted-foreground">Based on your resume, we don't have an immediate match for our current open positions. However, we will keep your resume on file for future opportunities.</p>
                    )}
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
