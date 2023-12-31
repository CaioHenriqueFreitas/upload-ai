import { Label } from "./components/ui/label";
import { Separator } from "./components/ui/separator";
import { Button } from "./components/ui/button";
import { GithubIcon, FileVideo2, UploadIcon, Wand2Icon } from "lucide-react"
import { Textarea } from "./components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./components/ui/select";
import { Slider } from "./components/ui/slider";


export function App() {
  return (
      <div className="min-h-screen flex flex-col">
        <div className="px-6 py-3 flex items-center justify-between border-b"> 
          <h1 className="text-xl font-bold">upload.ai</h1>
          <div className="flex items-center gap-3">
            <span className="text-small text-muted-foreground">Desenvolvido com 💚 por Caio</span>
            <Separator orientation="vertical" className="h-6"/>
            <Button variant={"outline"}>
              <GithubIcon className="w-4 h-4 mr-2"/> Github
            </Button>

          </div>
        </div>
        <main className="flex-1 p-6 flex gap-6 flex-row">
          <div className="flex flex-col flex- gap-4">
            <div className="grid grid-rows-2 gap-4 flex-1">
              <Textarea 
                className="resize-none p-5 leading-relaxed"
                placeholder="Inclua o prompt para IA..."
              />
              <Textarea 
                className="resize-none p-5 leading-relaxed"
                placeholder="Resultado gerado pela IA" 
                readOnly
              />
            </div>
            <p className="text-small text-muted-foreground">Lembre-se você pode utilizar a variável <code className="text-green-400">{'{transcription}'}</code> no seu prompt para adicionar o conteúdo da transcrição do vídeo selecionado</p>
          </div>
          <aside className="w-80 space-y-6">
            <form className="space-y-6">
              
              <label htmlFor="video"
              className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5">
                <FileVideo2 className="w-4 h-4"/> Selecione um video
              </label>
              <input type="file" id="video" accept="video/mp4" className="sr-only"/>
              
              <Separator />
              <div className="space-y-2">
                <Label htmlFor="transcription_prompt">Prompt de transcrição</Label>
                <Textarea id="transcript_prompt" 
                className="h-20 leading-relaxed resize-none"
                placeholder="Inclua palavras chave separadas por vírgula (,)"
                />
              </div>
              <Button type="submit" className="w-full">
                Carregar vídeo 
                <UploadIcon className="w-4 h-4 ml-2"/>
              </Button>
            </form>
            <Separator/>
            <form className="space-y-6">
            <div className="space-y-2">
                <Label>Prompt</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um prompt"/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="title">Titulo do Youtube</SelectItem>
                    <SelectItem value="description">Descrição do Youtube</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Modelo</Label>
                <Select defaultValue="gpt3.5" disabled>
                  <SelectTrigger>
                    <SelectValue/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
                  </SelectContent>
                </Select>
                <span className="block text-xs text-mute-foreground italic">
                  Você poderá customizar essa opção em breve
                </span>
              </div>
              <Separator/>
              <div className="space-y-4">
                <Label>Temperatura</Label>
                <Slider
                  min={0}
                  max={1}
                  step={0.1}
                />
                <span className="block text-xs text-mute-foreground italic leading-relaxed">
                  Valores mais altos tendem a deixar resultado mais criativo e com possíveis erros
                </span>
              </div>
              <Separator/>
              <Button type="submit" className="w-full ">
                Executar 
                <Wand2Icon className="w-4 h-4 ml-2"/> 
              </Button>
            </form>
          </aside>
        </main>
      </div>
  )
  }